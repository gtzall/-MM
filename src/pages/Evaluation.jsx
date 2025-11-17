import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { marcas, combustiveis, cambios } from '../mock/vehicleData';

export const Evaluation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    marca: '',
    modelo: '',
    ano: '',
    km: '',
    combustivel: '',
    cambio: '',
    cor: '',
    placa: '',
    observacoes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    console.log('Form submitted:', formData);
    toast({
      title: "Avaliação Enviada!",
      description: "Entraremos em contato em breve com a avaliação do seu veículo.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      marca: '',
      modelo: '',
      ano: '',
      km: '',
      combustivel: '',
      cambio: '',
      cor: '',
      placa: '',
      observacoes: ''
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Avalie seu Veículo</h1>
          <p className="text-lg text-slate-600">Preencha os dados e receba uma avaliação gratuita</p>
        </div>

        <Card className="p-8 border-0 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-slate-600" />
                Seus Dados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">Nome Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-slate-600" />
                Dados do Veículo
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="marca" className="text-slate-700 font-medium">Marca *</Label>
                  <Select value={formData.marca} onValueChange={(value) => handleChange('marca', value)} required>
                    <SelectTrigger className="mt-1 h-11">
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
                  <Label htmlFor="modelo" className="text-slate-700 font-medium">Modelo *</Label>
                  <Input
                    id="modelo"
                    type="text"
                    required
                    value={formData.modelo}
                    onChange={(e) => handleChange('modelo', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="Ex: Civic"
                  />
                </div>
                <div>
                  <Label htmlFor="ano" className="text-slate-700 font-medium">Ano *</Label>
                  <Input
                    id="ano"
                    type="number"
                    required
                    value={formData.ano}
                    onChange={(e) => handleChange('ano', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="2023"
                  />
                </div>
                <div>
                  <Label htmlFor="km" className="text-slate-700 font-medium">Quilometragem *</Label>
                  <Input
                    id="km"
                    type="number"
                    required
                    value={formData.km}
                    onChange={(e) => handleChange('km', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="50000"
                  />
                </div>
                <div>
                  <Label htmlFor="combustivel" className="text-slate-700 font-medium">Combustível *</Label>
                  <Select value={formData.combustivel} onValueChange={(value) => handleChange('combustivel', value)} required>
                    <SelectTrigger className="mt-1 h-11">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {combustiveis.map(combustivel => (
                        <SelectItem key={combustivel} value={combustivel}>{combustivel}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cambio" className="text-slate-700 font-medium">Câmbio *</Label>
                  <Select value={formData.cambio} onValueChange={(value) => handleChange('cambio', value)} required>
                    <SelectTrigger className="mt-1 h-11">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {cambios.map(cambio => (
                        <SelectItem key={cambio} value={cambio}>{cambio}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cor" className="text-slate-700 font-medium">Cor *</Label>
                  <Input
                    id="cor"
                    type="text"
                    required
                    value={formData.cor}
                    onChange={(e) => handleChange('cor', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="Ex: Prata"
                  />
                </div>
                <div>
                  <Label htmlFor="placa" className="text-slate-700 font-medium">Placa</Label>
                  <Input
                    id="placa"
                    type="text"
                    value={formData.placa}
                    onChange={(e) => handleChange('placa', e.target.value)}
                    className="mt-1 h-11"
                    placeholder="ABC-1234"
                  />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-slate-200">
              <Label htmlFor="observacoes" className="text-slate-700 font-medium">Observações Adicionais</Label>
              <Textarea
                id="observacoes"
                value={formData.observacoes}
                onChange={(e) => handleChange('observacoes', e.target.value)}
                className="mt-2 min-h-32"
                placeholder="Descreva o estado do veículo, opcionais, histórico de manutenção, etc."
              />
            </div>

            {/* Photo Upload Info */}
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Upload className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-1">Fotos do Veículo</p>
                  <p className="text-sm text-blue-700">
                    Após enviar o formulário, entre em contato pelo WhatsApp para enviar fotos do veículo e receber uma avaliação mais precisa.
                  </p>
                </div>
              </div>
            </Card>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enviar Avaliação
            </Button>
          </form>
        </Card>

        {/* Info Card */}
        <Card className="mt-8 p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Como Funciona?</h3>
          <ol className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="font-semibold text-green-600">1.</span>
              <span>Preencha o formulário com os dados do seu veículo</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-green-600">2.</span>
              <span>Nossa equipe analisa as informações em até 24 horas</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-green-600">3.</span>
              <span>Você recebe uma avaliação justa do seu veículo</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-green-600">4.</span>
              <span>Facilitamos a venda ou troca do seu carro</span>
            </li>
          </ol>
        </Card>
      </div>
    </div>
  );
};
