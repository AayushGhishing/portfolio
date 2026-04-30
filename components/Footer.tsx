"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{
      background: "#1c1a16",
      padding: "2.5rem clamp(1.5rem, 6vw, 6rem)",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "1rem",
      }}>
        <div>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.05rem", fontWeight: 800,
            color: "#f5f0e8", letterSpacing: "-0.03em",
            marginBottom: "0.22rem",
          }}>Aayush Tamang</div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem", color: "rgba(245,240,232,0.3)",
          }}>Data Scientist & ML Engineer</div>
        </div>

        <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
          {[
            { label: "Email",    href: "mailto:aayushghishing@gmail.com"                      },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/aayush-tamang-1470ba282/" },
            { label: "GitHub",   href: "https://github.com/AayushGhishing"                    },
          ].map(l => (
            <motion.a
              key={l.label}
              href={l.href} target="_blank" rel="noopener noreferrer"
              style={{
                padding: "0.35rem 0.85rem", borderRadius: "2rem",
                border: "1px solid rgba(245,240,232,0.1)",
                color: "rgba(245,240,232,0.38)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.78rem", fontWeight: 400,
                textDecoration: "none",
              }}
              whileHover={{ color: "#f5f0e8", borderColor: "rgba(245,240,232,0.28)" }}
              transition={{ duration: 0.15 }}
            >{l.label}</motion.a>
          ))}
        </div>

        <p style={{
          width: "100%",
          borderTop: "1px solid rgba(245,240,232,0.06)",
          paddingTop: "1.2rem", marginTop: "0.4rem",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.72rem", color: "rgba(245,240,232,0.2)",
        }}>
          {new Date().getFullYear()} — Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}