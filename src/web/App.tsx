import { useEffect, useState } from "react";

export function App() {
  const [message, setMessage] = useState<string>("loading...");
  useEffect(() => {
    fetch("/api/greeting")
      .then((r) => r.json())
      .then((j) => setMessage(j.message as string))
      .catch((err: unknown) => setMessage(`fetch failed: ${String(err)}`));
  }, []);
  return (
    <main style={{ padding: "3rem", maxWidth: "48rem", margin: "0 auto" }}>
      <h1 style={{ color: "#0f172a" }}>Truk</h1>
      <p style={{ color: "#94a3b8" }}>Achieve Real-time Fuel Data Accuracy</p>
      <p style={{
        marginTop: "2rem",
        padding: "1rem 1.5rem",
        background: "#1e293b",
        borderLeft: `4px solid #3b82f6`,
        borderRadius: "0.25rem",
      }}>{message}</p>
    </main>
  );
}
