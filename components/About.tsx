"use client";
import { motion } from "framer-motion";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] },
});

// barely-visible warm glass
const glass: React.CSSProperties = {
  background: "rgba(255,252,245,0.28)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,252,245,0.55)",
  borderRadius: "1.25rem",
  padding: "1.75rem",
};

const eyebrow: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.72rem", fontWeight: 500,
  letterSpacing: "0.13em", textTransform: "uppercase",
  color: "rgba(28,46,90,0.4)", marginBottom: "0.55rem",
};

export default function About() {
  return (
    <section id="about" style={{
      padding: "7rem clamp(1.5rem, 6vw, 6rem)",
      background: "linear-gradient(155deg, #f2ece0 0%, #f5f0e8 45%, #ede5d4 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", width: "580px", height: "580px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(205,190,160,0.22) 0%, transparent 70%)",
        top: "5%", right: "-160px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <motion.div {...rise(0)} style={{ marginBottom: "3rem" }}>
          <p style={eyebrow}>About</p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.035em",
            color: "#1c1a16", lineHeight: 1.08,
          }}>
            Background & approach
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.1rem",
        }}>
          {/* bio */}
          <motion.div {...rise(0.1)} style={glass}>
            <p style={{ ...eyebrow, marginBottom: "0.85rem" }}>Who I am</p>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem", fontWeight: 300,
              color: "rgba(28,26,22,0.65)", lineHeight: 1.82,
            }}>
              I'm Aayush Tamang — a data scientist and ML engineer based in Nepal.
              I build predictive systems, train neural networks, and care deeply
              about making models understandable and deployable, not just accurate.
            </p>
          </motion.div>

          {/* education */}
          <motion.div {...rise(0.18)} style={glass}>
            <p style={{ ...eyebrow, marginBottom: "0.9rem" }}>Education</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { title: "Bachelor in Information Technology",       sub: "Balmiki Lincoln College · 2022–Present" },
                { title: "Data Science", sub: "data science academy · 2022"           },
              ].map(e => (
                <div key={e.title} style={{
                  padding: "0.7rem 0.95rem",
                  borderRadius: "0.75rem",
                  background: "rgba(255,252,245,0.35)",
                  border: "1px solid rgba(255,252,245,0.6)",
                }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem", fontWeight: 500,
                    color: "#1c1a16",
                  }}>{e.title}</div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem", color: "rgba(28,26,22,0.38)",
                    marginTop: "0.18rem",
                  }}>{e.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* focus */}
          <motion.div {...rise(0.26)} style={glass}>
            <p style={{ ...eyebrow, marginBottom: "0.9rem" }}>Focus areas</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.42rem" }}>
              {["Deep Learning","NLP","Computer Vision","MLOps","Time Series","RAG / LLMs","Data Viz","Kaggle"].map(tag => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: "0.28rem 0.78rem", borderRadius: "2rem",
                    background: "rgba(28,46,90,0.06)",
                    border: "1px solid rgba(28,46,90,0.1)",
                    color: "#1c2e5a",
                    fontSize: "0.77rem",
                    fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                    cursor: "default",
                  }}
                >{tag}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}