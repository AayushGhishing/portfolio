"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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

const field: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 0.95rem",
  borderRadius: "0.75rem",
  background: "rgba(255,252,245,0.32)",
  border: "1px solid rgba(255,252,245,0.58)",
  color: "#1c1a16",
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.9rem", fontWeight: 400,
  outline: "none",
  transition: "border-color 0.18s",
  boxSizing: "border-box",
};

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.7rem", fontWeight: 500,
  letterSpacing: "0.1em", textTransform: "uppercase",
  color: "rgba(28,26,22,0.35)",
  marginBottom: "0.36rem",
};

export default function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [sent, setSent]   = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" style={{
      padding: "7rem clamp(1.5rem, 6vw, 6rem)",
      background: "linear-gradient(150deg, #f0e9da 0%, #f5f0e8 42%, #ede5d4 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", width: "560px", height: "560px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,185,152,0.22) 0%, transparent 70%)",
        bottom: "-100px", right: "-120px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <motion.div {...rise(0)} style={{ marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.13em", textTransform: "uppercase",
            color: "rgba(28,46,90,0.4)", marginBottom: "0.55rem",
          }}>Contact</p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.035em",
            color: "#1c1a16", lineHeight: 1.08,
          }}>Say hello</h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.1rem", alignItems: "start",
        }}>
          {/* info */}
          <motion.div {...rise(0.1)} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Email",    value: "aayushghishing@gmail.com",        href: "mailto:aayushghishing@gmail.com"                          },
              { label: "LinkedIn", value: "aayush-tamang-1470ba282",          href: "https://www.linkedin.com/in/aayush-tamang-1470ba282/"     },
              { label: "GitHub",   value: "AayushGhishing",                   href: "https://github.com/AayushGhishing"                        },
              { label: "Location", value: "Kathmandu, Nepal",                 href: null                                                       },
            ].map(info => (
              <motion.div
                key={info.label}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={glass}
              >
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.68rem", fontWeight: 500,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "rgba(28,26,22,0.32)", marginBottom: "0.28rem",
                }}>{info.label}</div>
                {info.href ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem", fontWeight: 500,
                    color: "#1c2e5a", textDecoration: "none",
                  }}>{info.value}</a>
                ) : (
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem", fontWeight: 500,
                    color: "#1c1a16",
                  }}>{info.value}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* form */}
          <motion.div {...rise(0.18)} style={glass}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "2rem", textAlign: "center",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1rem", fontWeight: 700,
                  color: "#1c2e5a",
                }}
              >
                Message sent. Talk soon.
              </motion.div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={label}>Name</label>
                  <input
                    type="text" required placeholder="Your name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    style={field}
                    onFocus={e => (e.target.style.borderColor = "rgba(28,46,90,0.28)")}
                    onBlur={e  => (e.target.style.borderColor = "rgba(255,252,245,0.58)")}
                  />
                </div>
                <div>
                  <label style={label}>Email</label>
                  <input
                    type="email" required placeholder="you@example.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={field}
                    onFocus={e => (e.target.style.borderColor = "rgba(28,46,90,0.28)")}
                    onBlur={e  => (e.target.style.borderColor = "rgba(255,252,245,0.58)")}
                  />
                </div>
                <div>
                  <label style={label}>Message</label>
                  <textarea
                    required rows={5} placeholder="What's on your mind?"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...field, resize: "vertical" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(28,46,90,0.28)")}
                    onBlur={e  => (e.target.style.borderColor = "rgba(255,252,245,0.58)")}
                  />
                </div>
                <motion.button
                  type="submit"
                  style={{
                    padding: "0.8rem",
                    borderRadius: "0.75rem",
                    background: "#1c1a16", border: "none",
                    color: "#f5f0e8",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500, fontSize: "0.88rem",
                    cursor: "pointer",
                  }}
                  whileHover={{ background: "#1c2e5a", scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  Send message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}