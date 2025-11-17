import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Gauge, Calendar, Fuel, Settings, Palette, ChevronLeft, ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockVehicles } from '../mock/vehicleData';

export const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = mockVehicles.find(v => v.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Veículo não encontrado</h1>
          <Link to="/catalogo">
            <Button className="bg-slate-800 hover:bg-slate-700">
              Voltar ao Catálogo
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatKm = (km) => {
    return new Intl.NumberFormat('pt-BR').format(km);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.imagens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.imagens.length) % vehicle.imagens.length);
  };

  const whatsappMessage = `Olá! Tenho interesse no ${vehicle.marca} ${vehicle.modelo} ${vehicle.versao} (${vehicle.ano}). Gostaria de mais informações.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/catalogo">
          <Button variant="ghost" className="mb-6 hover:bg-slate-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Catálogo
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <Card className="overflow-hidden border-0 shadow-xl mb-4">
              <div className="relative md:aspect-video aspect-[4/3] bg-slate-100">
                <img
                  src={vehicle.imagens[currentImageIndex]}
                  alt={`${vehicle.marca} ${vehicle.modelo}`}
                  className="w-full h-full object-contain p-2 md:p-0"
                />
                {vehicle.imagens.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6 text-slate-900" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6 text-slate-900" />
                    </button>
                  </>
                )}
                {vehicle.destaque && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg">
                    Destaque
                  </Badge>
                )}
              </div>
            </Card>

            {/* Thumbnails */}
            {vehicle.imagens.length > 1 && (
              <div className="flex gap-3">
                {vehicle.imagens.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-1 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index ? 'border-slate-800 scale-105' : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full aspect-video object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                {vehicle.marca} {vehicle.modelo}
              </h1>
              <p className="text-xl text-slate-600">{vehicle.versao}</p>
            </div>

            <Card className="p-6 mb-6 border-0 shadow-lg bg-gradient-to-br from-slate-50 to-white">
              <p className="text-4xl font-bold text-slate-900 mb-2">{formatPrice(vehicle.preco)}</p>
              <p className="text-sm text-slate-600">Aceita financiamento e troca</p>
            </Card>

            {/* Specs */}
            <Card className="p-6 mb-6 border-0 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Especificações</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-600">Ano</p>
                    <p className="font-semibold text-slate-900">{vehicle.ano}</p>
                  </div>
                </div>
                {vehicle.km != null && (
                  <div className="flex items-center gap-3">
                    <Gauge className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-600">Quilometragem</p>
                      <p className="font-semibold text-slate-900">{formatKm(vehicle.km)} km</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Fuel className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-600">Combustível</p>
                    <p className="font-semibold text-slate-900">{vehicle.combustivel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-600">Câmbio</p>
                    <p className="font-semibold text-slate-900">{vehicle.cambio}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-600">Cor</p>
                    <p className="font-semibold text-slate-900">{vehicle.cor}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="p-6 mb-6 border-0 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Descrição</h3>
              <p className="text-slate-700 leading-relaxed">{vehicle.descricao}</p>
            </Card>

            {/* Opcionais */}
            {vehicle.opcionais && vehicle.opcionais.length > 0 && (
              <Card className="p-6 mb-6 border-0 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Opcionais</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.opcionais.map((opcional, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-slate-700">{opcional}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/5511953501557?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <Link to="/financiamento">
                <Button variant="outline" className="w-full border-2 border-slate-300 hover:bg-slate-50 py-6 text-lg">
                  Simular Financiamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
