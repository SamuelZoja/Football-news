import Navbar from "../components/Navbar";

export default function Home() {
  return (
  <div style={{ background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <section
          style={{
            background: "#1e293b",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            ⚽ Football News - Dark Mode Edition
          </h1>

          <p style={{ marginTop: "10px", fontSize: "18px", color: "#cbd5e1" }}>
            Latest transfers, scores, and match analysis
          </p>
        </section>

        <section style={{ marginTop: "30px" }}>
          <h2>🔥 Trending Matches</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>Arsenal vs Chelsea</li>
            <li>Real Madrid vs Barcelona</li>
            <li>Man City vs Liverpool</li>
          </ul>
        </section>
      </main>
    </div>
  );
}