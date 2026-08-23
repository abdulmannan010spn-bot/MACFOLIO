import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import VariableProximity2 from "./VariableProximity2";

function Window() {
  const containerRef = useRef(null);

  return (
    <section
      id="welcome"
      ref={containerRef}
      style={{ position: "relative", minHeight: "300px" }}
    >
      <VariableProximity
        label="Hey, welcome to my"
        className="text-lg font-bold italic"
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={200}
        falloff="linear"
      />

      <VariableProximity2
        label="Portfolio"
        className="text-9xl mt-6"
        fromFontVariationSettings="'wght' 100"
        toFontVariationSettings="'wght' 500"
        fromStrokeWidth={0}
        toStrokeWidth={1.5}
        containerRef={containerRef}
        radius={200}
        falloff="linear"
      />
    </section>
  );
}

export default Window;
