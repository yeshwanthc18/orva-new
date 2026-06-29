"use client";

import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4">
      {/* WhatsApp */}
     <a
  href="https://wa.me/919999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-full
    bg-[#25D366]
    shadow-[0_15px_35px_rgba(37,211,102,.35)]
    transition-all
    duration-300
    hover:scale-110
  "
>
  <FaWhatsapp
    size={32}
    className="text-white"
  />

  <span
    className="
      absolute
      inset-0
      rounded-full
      border-2
      border-[#25D366]
      animate-ping
      opacity-20
    "
  />
</a>

      {/* Back To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={`
          group relative transition-all duration-500
          ${
            showTop
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0 pointer-events-none"
          }
        `}
      >
        <span className="absolute inset-0 rounded-full bg-[#AA1A12]/25 blur-xl group-hover:scale-150 transition-all duration-500" />

        <div
          className="
          relative
          flex h-16 w-16 items-center justify-center
          rounded-full
          border border-white/15
          bg-white/90
          backdrop-blur-xl
          shadow-[0_20px_40px_rgba(0,0,0,.12)]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:-translate-y-1
        "
        >
          <ArrowUp
            size={26}
            className="text-[#AA1A12] transition-transform duration-300 group-hover:-translate-y-1"
          />
        </div>
      </button>
    </div>
  );
}