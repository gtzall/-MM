import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { VehicleDetails } from "./pages/VehicleDetails";
import { Financing } from "./pages/Financing";
import { Evaluation } from "./pages/Evaluation";
import { Contact } from "./pages/Contact";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Toaster } from "./components/ui/sonner";
import React, { useEffect, useState } from "react";
import { SplashScreen } from "./components/SplashScreen";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <SplashScreen visible={showSplash} />}
      <main className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/veiculo/:id" element={<VehicleDetails />} />
          <Route path="/financiamento" element={<Financing />} />
          <Route path="/avaliacao" element={<Evaluation />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      <Toaster />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
