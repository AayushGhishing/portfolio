"use client";
import { motion } from "framer-motion";

const categories = [
  { title: "Languages & Libraries", items: ["Python","R","SQL","TensorFlow","PyTorch","Scikit-learn","Keras"] },
  { title: "Data Engineering",      items: ["Pandas","NumPy","Apache Spark","dbt","Airflow","PostgreSQL"] },
  { title: "Visualization",         items: ["Matplotlib","Seaborn","Plotly","Power BI","Tableau","Streamlit"] },
  { title: "Cloud & Deployment",    items: ["AWS SageMaker","Docker","FastAPI","MLflow","DVC","Git","Linux"] },
];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] },
});

const glass: React.CSSProperties = {
  background: "rgba(255,252,245,0.28)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,252,245,0.55)",
  borderRadius: "1.25rem",
  padding: "1.75rem",
};

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "7rem clamp(1.5rem, 6vw, 6rem)",
      background: "linear-gradient(148deg, #ede5d4 0%, #f5f0e8 42%, #f0e9da 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(195,180,148,0.2) 0%, transparent 70%)",
        bottom: "-80px", left: "-120px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <motion.div {...rise(0)} style={{ marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.13em", textTransform: "uppercase",
            color: "rgba(28,46,90,0.4)", marginBottom: "0.55rem",
          }}>Skills</p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.035em",
            color: "#1c1a16", lineHeight: 1.08,
          }}>Tech stack</h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.1rem",
        }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...rise(i * 0.09)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={glass}
            >
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.88rem", fontWeight: 700,
                color: "#1c1a16", letterSpacing: "-0.01em",
                marginBottom: "0.95rem",
              }}>{cat.title}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem" }}>
                {cat.items.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06 }}
                    style={{
                      padding: "0.26rem 0.7rem", borderRadius: "2rem",
                      background: "rgba(28,46,90,0.06)",
                      border: "1px solid rgba(28,46,90,0.1)",
                      color: "#1c2e5a",
                      fontSize: "0.76rem",
                      fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                      cursor: "default",
                    }}
                  >{skill}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}