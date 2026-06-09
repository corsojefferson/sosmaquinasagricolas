import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOS Máquinas Agrícolas — Soluções que movem o seu campo" },
      { name: "description", content: "Peças e serviços para máquinas agrícolas: pulverização, hidráulica, retentores e prensa de mangueiras." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/landing-agricola/index.html");
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      background: "#f5f3ee",
      color: "#1f6b3a",
    }}>
      <p>
        Redirecionando para a landing page…{" "}
        <a href="/landing-agricola/" style={{ color: "#f08a1f", fontWeight: 700 }}>
          clique aqui se não for redirecionado
        </a>
      </p>
    </div>
  );
}
