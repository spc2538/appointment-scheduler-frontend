import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureSection from "./components/FeatureSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <FeatureSection
                subtitle="Subtitle"
                title="Build better interfaces"
                text="Tailwind and React help you build fast, responsive, and clean user interfaces with minimal effort."
                image="/feature-image.png"
              />
              <CTA />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
