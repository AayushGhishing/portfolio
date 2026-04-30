"use client";
import { motion } from "framer-motion";

const appear = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "7rem clamp(1.5rem, 6vw, 6rem) 5rem",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(150deg, #f0e9da 0%, #f5f0e8 38%, #ede5d4 70%, #f2ece0 100%)",
    }}>

      {/* warm blobs */}
      <motion.div style={{
        position: "absolute", width: "700px", height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(210,195,165,0.35) 0%, transparent 68%)",
        top: "-200px", right: "-180px", pointerEvents: "none",
      }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div style={{
        position: "absolute", width: "520px", height: "520px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(195,185,155,0.25) 0%, transparent 68%)",
        bottom: "-140px", left: "-100px", pointerEvents: "none",
      }}
        animate={{ scale: [1, 1.09, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* grain texture overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat", backgroundSize: "128px",
      }} />

      <div style={{ maxWidth: "820px", position: "relative", zIndex: 1 }}>
        <motion.p {...appear(0.1)} style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.75rem", fontWeight: 500,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "rgba(28,46,90,0.45)", marginBottom: "1.4rem",
        }}>
          Data Scientist — Kathmandu, Nepal
        </motion.p>

        <motion.h1 {...appear(0.22)} style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(3.2rem, 7.5vw, 7rem)",
          fontWeight: 800, lineHeight: 1.0,
          letterSpacing: "-0.04em",
          color: "#1c1a16", marginBottom: "1.1rem",
        }}>
          Turning data
          <br />
          <span style={{
            color: "transparent",
            WebkitTextStroke: "2px #1c2e5a",
            fontStyle: "italic",
          }}>
            into clarity.
          </span>
        </motion.h1>

        <motion.p {...appear(0.36)} style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(1rem, 1.5vw, 1.1rem)", fontWeight: 300,
          color: "rgba(28,26,22,0.52)", lineHeight: 1.82,
          maxWidth: "500px", marginBottom: "2.75rem",
        }}>
          ML engineer focused on deep learning, NLP, and shipping models
          that work in production — not just notebooks.
        </motion.p>

        <motion.div {...appear(0.48)} style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
          <motion.a
            href="#projects"
            style={{
              padding: "0.75rem 1.8rem", borderRadius: "2rem",
              background: "#1c1a16", color: "#f5f0e8",
              fontFamily: "'Outfit', sans-serif", fontWeight: 500,
              fontSize: "0.88rem", textDecoration: "none",
              letterSpacing: "0.01em",
            }}
            whileHover={{ background: "#1c2e5a", scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            View work
          </motion.a>
          <motion.a
            href="mailto:aayushghishing@gmail.com"
            style={{
              padding: "0.75rem 1.8rem", borderRadius: "2rem",
              background: "rgba(245,240,232,0.22)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(28,26,22,0.14)",
              color: "#1c1a16",
              fontFamily: "'Outfit', sans-serif", fontWeight: 400,
              fontSize: "0.88rem", textDecoration: "none",
            }}
            whileHover={{ background: "rgba(245,240,232,0.5)", scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        {/* stats */}
        <motion.div {...appear(0.62)} style={{
          marginTop: "5rem",
          display: "flex", gap: "3.5rem", flexWrap: "wrap",
        }}>
          {[
            { n: "3+",  label: "Years" },
            { n: "20+", label: "Projects" },
            { n: "10+", label: "Models deployed" },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "2.2rem", fontWeight: 800,
                color: "#1c1a16", letterSpacing: "-0.04em", lineHeight: 1,
              }}>{s.n}</div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem", fontWeight: 400,
                color: "rgba(28,26,22,0.38)", marginTop: "0.22rem",
                letterSpacing: "0.04em",
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}