import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function CursorGlow() {
  const ref = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const el = ref.current;
    let raf = null;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      curX += (x - curX) * 0.12;
      curY += (y - curY) * 0.12;
      if (el) {
        el.style.transform = `translate(${curX - 220}px, ${curY - 220}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-30 hidden h-[440px] w-[440px] rounded-full blur-[90px] md:block ${
        theme === "light"
          ? "opacity-[0.10] mix-blend-multiply"
          : "opacity-[0.15] mix-blend-screen"
      }`}
      style={{
        background:
          "radial-gradient(circle at center, #3ee6e0 0%, #8b5cf6 45%, transparent 70%)",
      }}
    />
  );
}
