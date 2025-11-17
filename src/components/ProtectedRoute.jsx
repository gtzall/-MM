import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AdminLogin } from '../pages/AdminLogin';
import { AdminDashboard } from '../pages/AdminDashboard';

export const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('adminAuth');
    setIsAuthenticated(auth === 'true');
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">Carregando...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />;
  }

  return <AdminDashboard />;
};
