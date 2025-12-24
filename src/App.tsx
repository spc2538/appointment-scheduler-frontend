import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureSection from "./components/FeatureSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
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
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
