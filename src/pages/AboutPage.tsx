import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-400">
            About TCC 2.0
          </h1>

          {/* Vision Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              TCC 2.0 envisions a world where digital income is accessible to all—whether you're in a metro city or a rural village. 
              We are committed to decentralizing wealth opportunities and making financial freedom achievable through technology and community.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <div className="grid gap-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-lg text-neutral-300">
                  Empower users with daily earning models powered by blockchain
                </p>
              </div>
              <div className="flex items-start">
                <Target className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-lg text-neutral-300">
                  Deliver real-world utility through a trusted and growing token
                </p>
              </div>
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-lg text-neutral-300">
                  Continue the legacy of ChampCash with transparency, innovation, and scale
                </p>
              </div>
            </div>
          </section>

          {/* What Makes Us Unique Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">What Makes Us Unique?</h2>
            <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/10 rounded-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span className="text-neutral-300">Legacy credibility with 20M+ past users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span className="text-neutral-300">Fully on-chain referral structure with multi-level rewards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span className="text-neutral-300">Chainlink-powered real-time pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span className="text-neutral-300">Planned expansion to e-commerce, gaming, and merchant services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  <span className="text-neutral-300">A continuous earning loop with real-world value</span>
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <p className="text-xl text-white font-semibold">
                  With TCC 2.0, everyone becomes a champion.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;