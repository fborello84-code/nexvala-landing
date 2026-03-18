export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
      textAlign: "center"
    }}>

      <h1 style={{ fontSize: "36px", maxWidth: "800px" }}>
        Quality doesn’t need more tools. It needs memory.
      </h1>

      <p style={{ color: "gray", marginTop: "20px" }}>
        Most companies solve problems.<br />
        Very few retain the knowledge.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          placeholder="Enter your email"
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button style={{ padding: "10px 20px" }}>
          Request early access
        </button>
      </div>

      <div style={{ marginTop: "80px", maxWidth: "600px" }}>
        <p>You solve a problem.</p>
        <p>You close it.</p>
        <p><b>Six months later — it comes back.</b></p>
        <p>Same issue. Different people.</p>
        <p>And everything starts from zero.</p>
      </div>

      <div style={{ marginTop: "80px", maxWidth: "600px" }}>
        <p>The problem is not lack of data.</p>
        <p><b>It’s lack of connection.</b></p>
        <p style={{ color: "gray" }}>
          Quality systems store information.<br />
          But they don’t learn from it.
        </p>
      </div>

      <div style={{ marginTop: "80px", maxWidth: "600px" }}>
        <p>Nexvala is being built to change this.</p>
        <p style={{ color: "gray" }}>
          A system where problems are not just closed —<br />
          but remembered.
        </p>
      </div>

    </main>
  );
}
