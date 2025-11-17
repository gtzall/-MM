import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut, Search, Car as CarIcon } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useToast } from '../hooks/use-toast';
import { marcas, combustiveis, cambios } from '../mock/vehicleData';
import axios from 'axios';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    versao: '',
    ano: '',
    km: '',
    preco: '',
    combustivel: '',
    cambio: '',
    cor: '',
    portas: '4',
    placa: '',
    destaque: false,
    descricao: '',
    opcionais: '',
    imagens: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800'
  });

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  // Load vehicles from backend on component mount
  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/vehicles`);
      setVehicles(response.data);
    } catch (error) {
      toast({
        title: 'Erro ao carregar veículos',
        description: 'Não foi possível carregar os veículos do servidor.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredVehicles = vehicles.filter(v => 
    v.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.modelo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenDialog = (vehicle = null) => {
    if (vehicle) {
      setEditingVehicle(vehicle);
      setFormData({
        ...vehicle,
        opcionais: vehicle.opcionais.join(', '),
        imagens: vehicle.imagens[0]
      });
    } else {
      setEditingVehicle(null);
      setFormData({
        marca: '',
        modelo: '',
        versao: '',
        ano: '',
        km: '',
        preco: '',
        combustivel: '',
        cambio: '',
        cor: '',
        portas: '4',
        placa: '',
        destaque: false,
        descricao: '',
        opcionais: '',
        imagens: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800'
      });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const vehicleData = {
      ...formData,
      ano: parseInt(formData.ano),
      km: parseInt(formData.km),
      preco: parseFloat(formData.preco),
      portas: parseInt(formData.portas),
      opcionais: formData.opcionais.split(',').map(o => o.trim()).filter(o => o),
      imagens: [formData.imagens, formData.imagens]
    };

    try {
      if (editingVehicle) {
        // Update existing vehicle
        const response = await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/vehicles/${editingVehicle.id}`,
          vehicleData
        );
        setVehicles(vehicles.map(v => 
          v.id === editingVehicle.id ? response.data : v
        ));
        toast({
          title: "Veículo atualizado!",
          description: "As informações foram atualizadas com sucesso.",
        });
      } else {
        // Add new vehicle
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/vehicles`,
          vehicleData
        );
        setVehicles([...vehicles, response.data]);
        toast({
          title: "Veículo adicionado!",
          description: "O veículo foi adicionado ao estoque.",
        });
      }
      
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Erro ao salvar veículo",
        description: "Não foi possível salvar as alterações. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este veículo?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/vehicles/${id}`);
        setVehicles(vehicles.filter(v => v.id !== id));
        toast({
          title: "Veículo removido!",
          description: "O veículo foi removido do estoque.",
        });
      } catch (error) {
        toast({
          title: "Erro ao remover veículo",
          description: "Não foi possível remover o veículo. Tente novamente.",
          variant: "destructive",
        });
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Painel Administrativo</h1>
            <p className="text-slate-600">Gerencie o estoque de veículos</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total de Veículos</p>
                <p className="text-3xl font-bold text-slate-900">{vehicles.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <CarIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>
          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Em Destaque</p>
                <p className="text-3xl font-bold text-slate-900">{vehicles.filter(v => v.destaque).length}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <CarIcon className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </Card>
          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Valor Total</p>
                <p className="text-2xl font-bold text-slate-900">
                  {formatPrice(vehicles.reduce((sum, v) => sum + v.preco, 0))}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CarIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <Card className="p-6 mb-6 border-0 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Buscar veículo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => handleOpenDialog()}
                  className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white h-12 px-6"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Adicionar Veículo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingVehicle ? 'Editar Veículo' : 'Adicionar Novo Veículo'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Marca *</Label>
                      <Select value={formData.marca} onValueChange={(value) => setFormData({...formData, marca: value})} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {marcas.map(marca => (
                            <SelectItem key={marca} value={marca}>{marca}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Modelo *</Label>
                      <Input
                        value={formData.modelo}
                        onChange={(e) => setFormData({...formData, modelo: e.target.value})}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label>Versão *</Label>
                      <Input
                        value={formData.versao}
                        onChange={(e) => setFormData({...formData, versao: e.target.value})}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label>Ano *</Label>
                      <Input
                        type="number"
                        value={formData.ano}
                        onChange={(e) => setFormData({...formData, ano: e.target.value})}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label>Km *</Label>
                      <Input
                        type="number"
                        value={formData.km}
                        onChange={(e) => setFormData({...formData, km: e.target.value})}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label>Preço *</Label>
                      <Input
                        type="number"
                        value={formData.preco}
                        onChange={(e) => setFormData({...formData, preco: e.target.value})}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label>Combustível *</Label>
                      <Select value={formData.combustivel} onValueChange={(value) => setFormData({...formData, combustivel: value})} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {combustiveis.map(c => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Câmbio *</Label>
                      <Select value={formData.cambio} onValueChange={(value) => setFormData({...formData, cambio: value})} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {cambios.map(c => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Cor *</Label>
                      <Input
                        value={formData.cor}
                        onChange={(e) => setFormData({...formData, cor: e.target.value})}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label>Placa</Label>
                      <Input
                        value={formData.placa}
                        onChange={(e) => setFormData({...formData, placa: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Descrição *</Label>
                    <Textarea
                      value={formData.descricao}
                      onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label>Opcionais (separados por vírgula)</Label>
                    <Textarea
                      value={formData.opcionais}
                      onChange={(e) => setFormData({...formData, opcionais: e.target.value})}
                      className="mt-1"
                      placeholder="Ar condicionado, Direção elétrica, etc."
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.destaque}
                      onChange={(e) => setFormData({...formData, destaque: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <Label>Colocar em destaque</Label>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1 bg-slate-800 hover:bg-slate-700">
                      {editingVehicle ? 'Atualizar' : 'Adicionar'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* Vehicles Table */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
                <span className="ml-3 text-slate-600">Carregando veículos...</span>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Veículo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Ano</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Km</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Preço</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredVehicles.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={vehicle.imagens[0]}
                            alt={vehicle.modelo}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-semibold text-slate-900">{vehicle.marca} {vehicle.modelo}</p>
                            <p className="text-sm text-slate-600">{vehicle.versao}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-700">{vehicle.ano}</td>
                      <td className="px-6 py-4 text-slate-700">{vehicle.km.toLocaleString()} km</td>
                      <td className="px-6 py-4 font-semibold text-slate-900">{formatPrice(vehicle.preco)}</td>
                      <td className="px-6 py-4">
                        {vehicle.destaque && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Destaque
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <Button
                            onClick={() => handleOpenDialog(vehicle)}
                            size="sm"
                            variant="outline"
                            className="border-slate-300"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => handleDelete(vehicle.id)}
                            size="sm"
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
