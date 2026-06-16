import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <section
          style={{
            background: "#f5f5f5",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            ARSENAL WIN DRAMATIC FINAL IN THE HERO 🏆
          </h1>

          <p style={{ marginTop: "10px", fontSize: "18px" }}>
            Breaking football news and match highlights
          </p>
        </section>
      </main>
    </>
  );
}