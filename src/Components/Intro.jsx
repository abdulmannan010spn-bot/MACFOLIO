import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const greetings = ["Hello", "नमस्ते", "السلام عليكم", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];

const Intro = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            onComplete?.();
          },
        });
      },
    });

    greetings.forEach((_, i) => {
      tl.set(textRef.current, {
        opacity: 0,
        y: 20,
      })

        .call(() => setIndex(i))

        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        })

        .to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
          delay: 0.1, // how long each greeting stays visible
        });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white/25 backdrop-blur-[45px] backdrop-saturate-140 overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-black text-9xl font-bold font-[Playwrite_US_Trad]"
      >
        {greetings[index]}
      </h1>
    </div>
  );
};

export default Intro;
