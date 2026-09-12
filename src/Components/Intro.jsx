import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const greetings = [
  { text: "Hello", font: "font-[Playwrite_US_Trad]", dir: "ltr" },
  { text: "नमस्ते", font: "font-[Poppins]", dir: "ltr" },
  { text: "السلام عليكم", font: "font-[Noto_Sans_Arabic]", dir: "rtl" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", font: "font-[Noto_Sans_Gurmukhi]", dir: "ltr" },
];

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
          delay: 0.1,
        });
    });
  }, []);

  const current = greetings[index];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white/25 backdrop-blur-[45px] backdrop-saturate-140 overflow-hidden"
    >
      <h1
        ref={textRef}
        dir={current.dir}
        className={`text-black text-9xl font-bold ${current.font}`}
      >
        {current.text}
      </h1>
    </div>
  );
};

export default Intro;