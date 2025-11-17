import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Calendar, Fuel, Settings, Eye } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const VehicleCard = ({ vehicle }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatKm = (km) => {
    return new Intl.NumberFormat('pt-BR').format(km);
  };

  return (
    <Card className="group overflow-hidden border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-800">
      {/* Image */}
      <div className="relative overflow-hidden md:aspect-video aspect-[4/3] bg-gray-700">
        <img
          src={vehicle.imagens[0]}
          alt={`${vehicle.marca} ${vehicle.modelo}`}
          className="w-full h-full object-contain p-2 md:p-0"
        />
        {vehicle.destaque && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg">
            Destaque
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white mb-1">
            {vehicle.marca} {vehicle.modelo}
          </h3>
          <p className="text-sm text-gray-300">{vehicle.versao}</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{vehicle.ano}</span>
          </div>
          {vehicle.km != null && (
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Gauge className="w-4 h-4 text-gray-400" />
              <span>{formatKm(vehicle.km)} km</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Fuel className="w-4 h-4 text-gray-400" />
            <span>{vehicle.combustivel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Settings className="w-4 h-4 text-gray-400" />
            <span>{vehicle.cambio}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4 pb-4 border-b border-gray-600">
          <p className="text-2xl font-bold text-white">{formatPrice(vehicle.preco)}</p>
          <p className="text-xs text-gray-400 mt-1">✓ Financiamento em até 18x no cartão</p>
        </div>

        {/* Action Button */}
        <Link to={`/veiculo/${vehicle.id}`}>
          <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 shadow-md hover:shadow-lg transition-all duration-300 font-semibold">
            <Eye className="w-4 h-4 mr-2" />
            Ver Detalhes
          </Button>
        </Link>
      </div>
    </Card>
  );
};
