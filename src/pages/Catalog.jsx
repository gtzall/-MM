import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card } from '../components/ui/card';
import { VehicleCard } from '../components/VehicleCard';
import { mockVehicles, marcas, combustiveis, cambios } from '../mock/vehicleData';

export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMarca, setSelectedMarca] = useState('all');
  const [selectedCombustivel, setSelectedCombustivel] = useState('all');
  const [selectedCambio, setSelectedCambio] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter(vehicle => {
      const matchesSearch = searchTerm === '' || 
        vehicle.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.versao.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMarca = selectedMarca === 'all' || vehicle.marca === selectedMarca;
      const matchesCombustivel = selectedCombustivel === 'all' || vehicle.combustivel === selectedCombustivel;
      const matchesCambio = selectedCambio === 'all' || vehicle.cambio === selectedCambio;
      
      const matchesMinPrice = minPrice === '' || vehicle.preco >= parseFloat(minPrice);
      const matchesMaxPrice = maxPrice === '' || vehicle.preco <= parseFloat(maxPrice);

      return matchesSearch && matchesMarca && matchesCombustivel && matchesCambio && matchesMinPrice && matchesMaxPrice;
    });
  }, [searchTerm, selectedMarca, selectedCombustivel, selectedCambio, minPrice, maxPrice]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedMarca('all');
    setSelectedCombustivel('all');
    setSelectedCambio('all');
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nosso Estoque</h1>
          <p className="text-lg text-gray-300">Encontre o veículo perfeito para você</p>
        </div>

        {/* Search Bar */}
        <Card className="p-6 mb-6 border border-gray-700 bg-gray-800 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar por marca, modelo ou versão..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="h-12 px-6 border-gray-600 bg-gray-700 text-white hover:bg-gray-600"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Marca</label>
                  <Select value={selectedMarca} onValueChange={setSelectedMarca}>
                    <SelectTrigger className="h-11 bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="all" className="text-white hover:bg-gray-700">Todas</SelectItem>
                      {marcas.map(marca => (
                        <SelectItem key={marca} value={marca} className="text-white hover:bg-gray-700">{marca}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Combustível</label>
                  <Select value={selectedCombustivel} onValueChange={setSelectedCombustivel}>
                    <SelectTrigger className="h-11 bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="all" className="text-white hover:bg-gray-700">Todos</SelectItem>
                      {combustiveis.map(combustivel => (
                        <SelectItem key={combustivel} value={combustivel} className="text-white hover:bg-gray-700">{combustivel}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Câmbio</label>
                  <Select value={selectedCambio} onValueChange={setSelectedCambio}>
                    <SelectTrigger className="h-11 bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="all" className="text-white hover:bg-gray-700">Todos</SelectItem>
                      {cambios.map(cambio => (
                        <SelectItem key={cambio} value={cambio} className="text-white hover:bg-gray-700">{cambio}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Preço</label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Mín"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="h-11 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Input
                      type="number"
                      placeholder="Máx"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="h-11 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpar Filtros
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-300">
            <span className="font-semibold text-white">{filteredVehicles.length}</span> veículo(s) encontrado(s)
          </p>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center border border-gray-700 bg-gray-800 shadow-lg">
            <p className="text-lg text-gray-300">Nenhum veículo encontrado com os filtros selecionados.</p>
            <Button onClick={clearFilters} className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Limpar Filtros
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};
