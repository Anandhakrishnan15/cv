import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { TestimonialsProvider } from "./components/TestimonialsProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure you have a <div id='root'></div> in your HTML."
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <TestimonialsProvider>
      <App />
    </TestimonialsProvider>
  </StrictMode>
);
