import React, { useState } from 'react';
import { Calculator, TrendingDown, DollarSign, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';

export const Financing = () => {
  const [vehiclePrice, setVehiclePrice] = useState(100000);
  const [downPayment, setDownPayment] = useState(20000);
  const [months, setMonths] = useState(48);
  const [interestRate] = useState(1.99); // Taxa mensal

  const calculateInstallment = () => {
    const financed = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100;
    const installment = financed * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return installment;
  };

  const totalPayment = calculateInstallment() * months;
  const totalInterest = totalPayment - (vehiclePrice - downPayment);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simulador de Financiamento</h1>
          <p className="text-lg text-slate-600">Calcule as parcelas do seu próximo veículo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="p-8 border-0 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-3 rounded-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Dados do Financiamento</h2>
            </div>

            <div className="space-y-6">
              {/* Vehicle Price */}
              <div>
                <Label className="text-slate-700 font-semibold mb-2 block">Valor do Veículo</Label>
                <Input
                  type="number"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(parseFloat(e.target.value) || 0)}
                  className="h-12 text-lg"
                />
                <p className="text-sm text-slate-600 mt-1">{formatCurrency(vehiclePrice)}</p>
              </div>

              {/* Down Payment */}
              <div>
                <Label className="text-slate-700 font-semibold mb-3 block">
                  Entrada: {formatCurrency(downPayment)} ({((downPayment / vehiclePrice) * 100).toFixed(0)}%)
                </Label>
                <Slider
                  value={[downPayment]}
                  onValueChange={(value) => setDownPayment(value[0])}
                  min={0}
                  max={vehiclePrice}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>R$ 0</span>
                  <span>{formatCurrency(vehiclePrice)}</span>
                </div>
              </div>

              {/* Months */}
              <div>
                <Label className="text-slate-700 font-semibold mb-3 block">
                  Prazo: {months} meses
                </Label>
                <Slider
                  value={[months]}
                  onValueChange={(value) => setMonths(value[0])}
                  min={12}
                  max={60}
                  step={6}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>12 meses</span>
                  <span>60 meses</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Taxa de Juros</span>
                  <span className="text-lg font-bold text-slate-900">{interestRate}% a.m.</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 text-white">
              <h3 className="text-xl font-semibold mb-6">Valor da Parcela</h3>
              <p className="text-5xl font-bold mb-2">{formatCurrency(calculateInstallment())}</p>
              <p className="text-slate-300">por mês durante {months} meses</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-5 h-5 text-slate-400" />
                <h4 className="font-semibold text-slate-900">Valor Financiado</h4>
              </div>
              <p className="text-2xl font-bold text-slate-900">{formatCurrency(vehiclePrice - downPayment)}</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-5 h-5 text-slate-400" />
                <h4 className="font-semibold text-slate-900">Total de Juros</h4>
              </div>
              <p className="text-2xl font-bold text-slate-900">{formatCurrency(totalInterest)}</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-slate-400" />
                <h4 className="font-semibold text-slate-900">Total a Pagar</h4>
              </div>
              <p className="text-2xl font-bold text-slate-900">{formatCurrency(totalPayment + downPayment)}</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-green-50">
              <p className="text-sm text-green-800 mb-3">
                <strong>Informação:</strong> Esta é apenas uma simulação. Os valores podem variar de acordo com a análise de crédito e condições do banco.
              </p>
              <a
                href="https://wa.me/5511953501557?text=Olá! Gostaria de mais informações sobre financiamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  Falar no WhatsApp
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
