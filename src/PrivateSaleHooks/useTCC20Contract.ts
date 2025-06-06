import { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, TCC20_ABI } from '../config';

export function useTCC20Contract() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask');
      return null;
    }

    try {
      setIsConnecting(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, TCC20_ABI, signer);
      return contract;
    } catch (err) {
      setError('Failed to connect wallet');
      return null;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const estimateTokens = useCallback(async (bnbAmount: string) => {
    const contract = await connectWallet();
    if (!contract) return '0';
    
    try {
      const tokens = await contract.getTokenEstimate(ethers.parseEther(bnbAmount));
      return ethers.formatUnits(tokens, 18);
    } catch (err) {
      setError('Failed to estimate tokens');
      return '0';
    }
  }, [connectWallet]);

  const buyTokens = useCallback(async (bnbAmount: string, referrerAddress?: string) => {
    const contract = await connectWallet();
    if (!contract) return;

    try {
      const tx = await contract.buyTokens(referrerAddress || ethers.ZeroAddress, {
        value: ethers.parseEther(bnbAmount)
      });
      await tx.wait();
    } catch (err) {
      setError('Failed to buy tokens');
    }
  }, [connectWallet]);

  const getUserData = useCallback(async (userAddress: string) => {
    const contract = await connectWallet();
    if (!contract) return null;

    try {
      const user = await contract.users(userAddress);
      return {
        totalBoughtTokens: Number(user.totalBoughtTokens),
        tier1Rewards: Number(user.tier1Rewards),
        tier2Rewards: Number(user.tier2Rewards),
      };
    } catch (err) {
      setError('Failed to fetch user data');
      return null;
    }
  }, [connectWallet]);

  const getDirectReferrals = useCallback(async (userAddress: string) => {
    const contract = await connectWallet();
    if (!contract) return [];

    try {
      return await contract.getDirectReferrals(userAddress);
    } catch (err) {
      setError('Failed to fetch referrals');
      return [];
    }
  }, [connectWallet]);

  const getUpline = useCallback(async (userAddress: string, levels: number) => {
    const contract = await connectWallet();
    if (!contract) return [];

    try {
      return await contract.getUpline(userAddress, levels);
    } catch (err) {
      setError('Failed to fetch upline');
      return [];
    }
  }, [connectWallet]);

  return {
    isConnecting,
    error,
    estimateTokens,
    buyTokens,
    getUserData,
    getDirectReferrals,
    getUpline,
    connectWallet
  };
}