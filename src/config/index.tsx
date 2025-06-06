import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, sepolia } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import TCC20_ABI from './abis/TCC20.json' // ✅ or define inline as shown above


// Get projectId from https://cloud.reown.com
export const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694" // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}



  export const metadata = {
    name: "TCC 2.0",
    description: "The Evolution of Digital Earning",
    url: import.meta.env.PROD ? "https://reown.com" : window.location.origin,
    icons: ["https://reown.com/favicon.ico"]
  }
  

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [mainnet, arbitrum, sepolia] as [AppKitNetwork, ...AppKitNetwork[]]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig

export const CONTRACT_ADDRESS = "0xYourContractAddressHere" // Replace with actual deployed address

export { TCC20_ABI }



