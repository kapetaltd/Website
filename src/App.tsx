import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useRoute } from "./lib/router";
import { useReveal } from "./lib/useReveal";
import { Home } from "./pages/Home";
import { LegalPlaceholder } from "./pages/LegalPlaceholder";

export default function App() {
  const route = useRoute();
  useReveal([route]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        {route === "/privacy" ? (
          <LegalPlaceholder title="Privacy Policy" />
        ) : route === "/terms" ? (
          <LegalPlaceholder title="Terms of Use" />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </div>
  );
}
