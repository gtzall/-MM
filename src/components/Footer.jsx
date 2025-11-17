import React from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  const whatsappNumber = '5511999999999';

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Car className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MM Martins</h3>
                <p className="text-sm text-slate-400">Multimarcas</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sua concessionária de confiança em Guarulhos. Compra, venda, troca e financiamento de veículos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Veículos
                </Link>
              </li>
              <li>
                <Link to="/avaliacao" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Avalie seu Veículo
                </Link>
              </li>
              <li>
                <Link to="/financiamento" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Financiamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Av. Martins Junior, 123<br />Jd. Bela Vista, Guarulhos - SP</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/5511953501557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  WhatsApp: (11) 95350-1557
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contato@mmmartins.com.br</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="flex items-start gap-2 text-sm text-slate-400 mb-3">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 p-2 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 p-2 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>© 2024 MM Martins Multimarcas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
