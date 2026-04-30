"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Upasthiti FR — Smart Attendance",
    description: "Face recognition-based attendance system built with Python. Uses facial embeddings stored in MongoDB to mark attendance automatically via a web interface.",
    tech: ["Python", "OpenCV", "Flask", "MongoDB", "HTML"],
    github: "https://github.com/AayushGhishing/upasthiti_fr",
  },
  {
    title: "Heart Failure Prediction v2",
    description: "Improved iteration of the heart failure predictor with a refined UI/UX and better model pipeline architecture built in Python.",
    tech: ["Python", "Scikit-learn", "Flask", "HTML/CSS"],
    github: "https://github.com/AayushGhishing/ml_heartfailure_prediction",
  },
  {
    title: "Constitution App — Nepal",
    description: "A web app that makes the Constitution of Nepal accessible and easy to navigate for everyday citizens, with efficient search and structured presentation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AayushGhishing/Constitution_App",
  },
  {
    title: "Global Temperature Analysis",
    description: "Production-grade climate data dashboard with trend analysis & forecasting. Analyzes global temperature patterns and provides visual insights into climate trends.",
    tech: ["Python", "Data Analysis", "Dashboard", "Climate Data"],
    github: "https://github.com/AayushGhishing/global-temperature-analysis",
  },
];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: "7rem clamp(1.5rem, 6vw, 6rem)",
      background: "linear-gradient(152deg, #f5f0e8 0%, #ede5d4 50%, #f2ece0 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", width: "640px", height: "640px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(205,190,158,0.22) 0%, transparent 70%)",
        top: "-140px", right: "-200px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <motion.div {...rise(0)} style={{ marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.13em", textTransform: "uppercase",
            color: "rgba(28,46,90,0.4)", marginBottom: "0.55rem",
          }}>Work</p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.035em",
            color: "#1c1a16", lineHeight: 1.08,
          }}>Selected projects</h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.1rem",
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...rise(i * 0.07)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              style={{
                background: "rgba(255,252,245,0.28)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,252,245,0.55)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                display: "flex", flexDirection: "column", gap: "0.95rem",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* hairline top rule */}
              <div style={{
                position: "absolute", top: 0,
                left: "12%", right: "12%", height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(28,46,90,0.12), transparent)",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.98rem", fontWeight: 700,
                  color: "#1c1a16", letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                }}>{p.title}</h3>
                <motion.a
                  href={p.github}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    flexShrink: 0,
                    padding: "0.28rem 0.68rem", borderRadius: "2rem",
                    background: "rgba(28,46,90,0.06)",
                    border: "1px solid rgba(28,46,90,0.1)",
                    color: "#1c2e5a",
                    fontSize: "0.7rem",
                    fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                    textDecoration: "none",
                  }}
                  whileHover={{ background: "rgba(28,46,90,0.12)" }}
                >
                  GitHub
                </motion.a>
              </div>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.875rem", fontWeight: 300,
                color: "rgba(28,26,22,0.55)", lineHeight: 1.75, flex: 1,
              }}>{p.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    padding: "0.22rem 0.65rem", borderRadius: "2rem",
                    background: "rgba(28,46,90,0.055)",
                    border: "1px solid rgba(28,46,90,0.09)",
                    color: "#1c2e5a",
                    fontSize: "0.71rem",
                    fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...rise(0.45)} style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <motion.a
            href="https://github.com/AayushGhishing"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.72rem 1.8rem", borderRadius: "2rem",
              background: "rgba(255,252,245,0.28)",
              backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,252,245,0.55)",
              color: "#1c1a16",
              fontFamily: "'Outfit', sans-serif", fontWeight: 400,
              fontSize: "0.875rem", textDecoration: "none",
            }}
            whileHover={{ background: "rgba(255,252,245,0.52)", scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            All projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}