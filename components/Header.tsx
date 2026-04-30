"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Header() {
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  const bg     = useTransform(scrollY, [0, 60], ["rgba(245,240,232,0)", "rgba(245,240,232,0.78)"]);
  const shadow = useTransform(scrollY, [0, 60], ["0 0 0 rgba(0,0,0,0)", "0 1px 28px rgba(28,26,22,0.06)"]);

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const onScroll = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 110) { setActive(id); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 clamp(1.5rem, 5vw, 4rem)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(245,240,232,0.6)",
      background: bg,
      boxShadow: shadow,
    }}>
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.15rem", fontWeight: 800,
          color: "#1c1a16", letterSpacing: "-0.03em", padding: 0,
        }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.18 }}
      >
        Aayush Tamang
      </motion.button>

      <nav style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
        {links.map(link => {
          const isActive = active === link.href.slice(1);
          return (
            <motion.a
              key={link.label}
              href={link.href}
              style={{
                padding: "0.38rem 0.85rem",
                borderRadius: "2rem",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.875rem",
                fontWeight: isActive ? 500 : 400,
                color: isActive ? "#1c2e5a" : "rgba(28,26,22,0.45)",
                textDecoration: "none",
                background: isActive ? "rgba(28,46,90,0.07)" : "transparent",
                border: isActive ? "1px solid rgba(28,46,90,0.1)" : "1px solid transparent",
                transition: "all 0.18s",
              }}
              whileHover={{ color: "#1c2e5a" }}
            >
              {link.label}
            </motion.a>
          );
        })}
        <motion.a
          href="https://github.com/AayushGhishing"
          target="_blank" rel="noopener noreferrer"
          style={{
            marginLeft: "0.5rem",
            padding: "0.4rem 1.1rem",
            borderRadius: "2rem",
            background: "#1c1a16",
            color: "#f5f0e8",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem", fontWeight: 500,
            textDecoration: "none",
          }}
          whileHover={{ background: "#1c2e5a", scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          GitHub
        </motion.a>
      </nav>
    </motion.header>
  );
}