import React from 'react';
import { MapPin, Phone, Mail, Clock, Handshake } from 'lucide-react';
import { Button } from '../components/ui/button';

export const Contact = () => {
  const whatsappNumber = '5511953501557';
  const whatsappMessage = 'Olá! Gostaria de agendar uma visita ou obter mais informações.';

  return (
    <div className="pt-24 pb-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700">
            <Handshake className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Contato</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">Converse com a MM Martins</h1>
          <p className="mt-2 text-gray-300">Estamos aqui para ajudar na escolha do seu próximo veículo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/60 p-6">
            <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>Av. Martins Junior, 123 – Jd. Bela Vista, Guarulhos – SP</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>(11) 95350-1557</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>contato@mmmartins.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>Seg–Sex: 9h–18h · Sáb: 9h–14h</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-600 hover:to-yellow-700">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Formulário simples */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/60 p-6">
            <h2 className="text-xl font-semibold mb-4">Envie uma Mensagem</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="h-11 w-full rounded-md bg-gray-700 border border-gray-600 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="h-11 w-full rounded-md bg-gray-700 border border-gray-600 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Telefone (opcional)"
                className="h-11 w-full rounded-md bg-gray-700 border border-gray-600 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                rows={5}
                placeholder="Como podemos ajudar?"
                className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <div className="flex gap-3">
                <Button type="submit" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-600 hover:to-yellow-700">
                  Enviar Mensagem
                </Button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Acabei de enviar uma mensagem pelo site e gostaria de falar agora.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                    Preferir WhatsApp
                  </Button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;