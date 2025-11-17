import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, DollarSign, RefreshCw, CreditCard, Shield, Clock, Award, Car, Calculator, ClipboardCheck, Handshake } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { VehicleCard } from '../components/VehicleCard';
import { mockVehicles } from '../mock/vehicleData';

export const Home = () => {
  const destaques = mockVehicles.filter(v => v.destaque).slice(0, 3);

  const services = [
    {
      icon: ShoppingCart,
      title: 'Compra',
      description: 'Veículos selecionados com procedência garantida',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: DollarSign,
      title: 'Venda',
      description: 'Avaliação justa e pagamento rápido',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: RefreshCw,
      title: 'Troca',
      description: 'Facilidade na troca do seu veículo',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: CreditCard,
      title: 'Financia',
      description: 'Em até 18x no cartão! As melhores taxas e condições especiais',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const benefits = [
    { icon: Shield, text: 'Veículos Vistoriados' },
    { icon: Clock, text: 'Atendimento Rápido' },
    { icon: Award, text: 'Garantia de Procedência' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Encontre o Veículo dos Seus Sonhos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
              MM Martins Multimarcas — oferecendo os melhores veículos em Guarulhos
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 md:mb-16 leading-relaxed">
              Compra, venda, troca e financiamento com as melhores condições.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link to="/catalogo">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 px-8 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  Ver Estoque Completo
                  <ArrowRight className="ml-3 w-5 md:w-6 h-5 md:h-6" />
                </Button>
              </Link>
              <Link to="/avaliacao">
                <Button variant="outline" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 px-8 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto">
                  Avalie seu Veículo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Bar */}
      <section className="py-8 md:py-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center gap-3 md:gap-4 text-center">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-400" />
                  <span className="font-semibold text-base md:text-lg text-gray-200">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Nossos Serviços</h2>
            <p className="text-lg md:text-xl text-gray-400">Tudo o que você precisa em um só lugar</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 bg-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Car className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Compra e Venda</h3>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">As melhores ofertas de veículos seminovos e usados</p>
              <ul className="text-xs md:text-sm text-gray-400 space-y-1">
                <li>• Estoque diversificado</li>
                <li>• Preços justos</li>
                <li>• Garantia de qualidade</li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8 bg-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Calculator className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Financiamento</h3>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">Parcele em até 18x no cartão de crédito</p>
              <ul className="text-xs md:text-sm text-gray-400 space-y-1">
                <li>• Aprovação rápida</li>
                <li>• Taxas competitivas</li>
                <li>• Parcelas flexíveis</li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8 bg-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <ClipboardCheck className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Avaliação</h3>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">Avaliamos seu veículo com transparência</p>
              <ul className="text-xs md:text-sm text-gray-400 space-y-1">
                <li>• Avaliação justa</li>
                <li>• Sem burocracia</li>
                <li>• Pagamento à vista</li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8 bg-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Handshake className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Troca</h3>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">Troque seu carro por um melhor</p>
              <ul className="text-xs md:text-sm text-gray-400 space-y-1">
                <li>• Troca facilitada</li>
                <li>• Diferença justa</li>
                <li>• Processo ágil</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Veículos em Destaque</h2>
            <p className="text-base md:text-lg text-gray-300">Confira nossas melhores ofertas</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            {destaques.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/catalogo">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 px-8 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Ver Todos os Veículos
                <ArrowRight className="ml-3 w-5 md:w-6 h-5 md:h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-10 lg:p-12 bg-gray-800 border border-gray-700 shadow-2xl text-white text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Pronto para Trocar de Carro?</h2>
            <p className="text-xl md:text-2xl mb-4 md:mb-6 text-gray-200 leading-relaxed">
              Estamos financiando em até 18x no cartão! Entre em contato e encontre as melhores condições.
            </p>
            <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-300 font-semibold">
              ✓ Aprovação rápida ✓ Taxas especiais ✓ Parcelas que cabem no seu bolso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <a
                href="https://wa.me/5511953501557?text=Olá! Gostaria de mais informações sobre financiamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 px-8 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  Falar no WhatsApp
                </Button>
              </a>
              <Link to="/financiamento">
                <Button variant="outline" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 px-8 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto">
                  Simular Financiamento
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
