import { X } from "lucide-react";

const MobileBlocker = () => {
  return (

    <div className="fixed inset-0 z-9999 flex md:hidden flex-col items-center justify-center bg-black/40 backdrop-blur-sm px-6">
      <div className="w-full max-w-xs rounded-2xl bg-red-500/30 backdrop-blur-md shadow-2xl border border-white/20 px-6 py-7 text-center">

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
          <X color="white" />
        </div>

        <h1 className="text-lg font-semibold text-white mb-2">
          Desktop Experience Only
        </h1>

        <p className="text-sm leading-relaxed text-white/85">
          This portfolio is an interactive OS simulation built for tablets
          and laptops. Please revisit on a larger screen.
        </p>
      </div>
    </div>
  );
};

export default MobileBlocker;