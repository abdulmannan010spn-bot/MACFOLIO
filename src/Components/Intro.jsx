import { useRef } from "react";
import gsap from "gsap";
import { AppleHelloEnglishEffect } from "./AppleHeroEffect";


const Intro = ({ onComplete }) => {
  const containerRef = useRef(null);

  // After the handwriting finishes, hold briefly, then slide the panel up
  const handleHelloComplete = () => {
    gsap.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.inOut",
      onComplete: () => onComplete?.(),
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white/25 backdrop-blur-[45px] backdrop-saturate-140 overflow-hidden"
    >
      <AppleHelloEnglishEffect
        speed={1.1}
        className="h-32 md:h-48 text-white"
        onAnimationComplete={handleHelloComplete}
      />
    </div>
  );
};

export default Intro;