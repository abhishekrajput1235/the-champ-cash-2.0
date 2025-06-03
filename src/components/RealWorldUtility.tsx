// import React, { useRef, useEffect } from 'react';
// import { ShoppingCart, Wallet, Lock, Gamepad2, Sparkles } from 'lucide-react';

// interface UtilityCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   delay: number;
// }

// const UtilityCard: React.FC<UtilityCardProps> = ({ icon, title, description, delay }) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => {
//               cardRef.current?.classList.add('opacity-100', 'translate-y-0');
//             }, delay);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, [delay]);

//   return (
//     <div
//       ref={cardRef}
//       className="bg-black/40 backdrop-blur-sm border border-yellow-500/10 rounded-xl p-6 transition-all duration-700 opacity-0 translate-y-8 hover:bg-black/50"
//     >
//       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-400/20 flex items-center justify-center mb-4">
//         <div className="text-yellow-500">{icon}</div>
//       </div>
//       <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//       <p className="text-neutral-300">{description}</p>
//     </div>
//   );
// };

// const RealWorldUtility: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             sectionRef.current?.classList.add('opacity-100');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black">
//       <div
//         ref={sectionRef}
//         className="container mx-auto px-4 md:px-6 transition-opacity duration-1000 opacity-0"
//       >
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-400">
//             Real-World Utility of TCC Token
//           </h2>
//           <p className="text-xl text-neutral-300">
//             TCC 2.0 is more than just a reward token. It's a utility asset with real-life usability.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <UtilityCard
//             icon={<ShoppingCart size={24} />}
//             title="E-commerce Shopping"
//             description="Use TCC to shop on partner e-commerce portals (launching soon)"
//             delay={100}
//           />
//           <UtilityCard
//             icon={<Wallet size={24} />}
//             title="Token Swapping"
//             description="Buy or sell TCC tokens directly on PancakeSwap (BSC DEX)"
//             delay={300}
//           />
//           <UtilityCard
//             icon={<Lock size={24} />}
//             title="Platform Access"
//             description="Unlock premium content and community features within the TCC ecosystem"
//             delay={500}
//           />
//           <UtilityCard
//             icon={<Gamepad2 size={24} />}
//             title="Gaming & Merchants"
//             description="Planned integrations with online games, recharges, and local vendors"
//             delay={700}
//           />
//           <UtilityCard
//             icon={<Sparkles size={24} />}
//             title="Future Use Cases"
//             description="Pay for services, join loyalty programs, stake for platform discounts"
//             delay={900}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RealWorldUtility;


import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ShoppingCart, Wallet, Lock, Gamepad2, Sparkles } from 'lucide-react';

interface UtilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UtilityCard: React.FC<UtilityCardProps> = ({ icon, title, description }) => (
  <div className="keen-slider__slide px-4 pt-10">
    <div className="h-full flex flex-col justify-between bg-[rgb(20,20,20)] border border-[rgb(255,215,0)]/30 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-105">
      <div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-400/20 flex items-center justify-center mb-4">
          <div className="text-yellow-400">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-neutral-300">{description}</p>
      </div>
    </div>
  </div>
);

const RealWorldUtility: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.2, spacing: 32 },
      },
    },
    created(slider) {
      const interval = setInterval(() => {
        slider.next();
      }, 3500);
      // Ensure to clear the interval on cleanup
      return () => clearInterval(interval);
    },
  });

  useEffect(() => {
    // Clean up slider interval on unmount
    return () => {
      if (sliderRef.current) {
        clearInterval(sliderRef.current);
      }
    };
  }, []);

  const cards = [
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce Shopping",
      description: "Use TCC to shop on partner e-commerce portals (launching soon)",
    },
    {
      icon: <Wallet size={24} />,
      title: "Token Swapping",
      description: "Buy or sell TCC tokens directly on PancakeSwap (BSC DEX)",
    },
    {
      icon: <Lock size={24} />,
      title: "Platform Access",
      description: "Unlock premium content and community features within the TCC ecosystem",
    },
    {
      icon: <Gamepad2 size={24} />,
      title: "Gaming & Merchants",
      description: "Planned integrations with online games, recharges, and local vendors",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Future Use Cases",
      description: "Pay for services, join loyalty programs, stake for platform discounts",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-400">
            Real-World Utility of TCC Token
          </h2>
          <p className="text-xl text-neutral-300">
            TCC 2.0 is more than just a reward token. It's a utility asset with real-life usability.
          </p>
        </div>

        <div ref={sliderInstanceRef} className="keen-slider min-h-[300px] mt-10">
          {cards.map((card, index) => (
            <UtilityCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldUtility;



