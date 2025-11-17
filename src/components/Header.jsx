import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, Phone, MapPin, Home, Calculator, ClipboardCheck, Handshake } from 'lucide-react';
import { Button } from './ui/button';
import { TubelightNavbar } from './ui/tubelight-navbar';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const whatsappNumber = '5511953501557'; // Updated WhatsApp number
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os veículos.';

  // Itens da navbar tubelight
  const navItems = [
    { name: 'Início', url: '/', icon: Home },
    { name: 'Catálogo', url: '/catalogo', icon: Car },
    { name: 'Financiamento', url: '/financiamento', icon: Calculator },
    { name: 'Avaliação', url: '/avaliacao', icon: ClipboardCheck },
    { name: 'Contato', url: '/contato', icon: Handshake }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <img src="/images/mm-logo.png" alt="MM" className="fixed top-[max(env(safe-area-inset-top),0.5rem)] left-[max(env(safe-area-inset-left),0.75rem)] h-8 sm:h-9 md:h-12 lg:h-14 w-auto pointer-events-none select-none z-[60]" />
      {/* Nova Navbar Tubelight */}
      <TubelightNavbar items={navItems} />
    </header>
  );
};
