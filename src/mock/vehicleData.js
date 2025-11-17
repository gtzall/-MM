// Dados mockados de veículos
export const mockVehicles = [
  {
    id: "1",
    marca: "Toyota",
    modelo: "Corolla",
    versao: "XEi 1.8",
    ano: 2009,
    km: 178207,
    preco: 53000,
    combustivel: "Flex",
    cambio: "Automático",
    cor: "Preto",
    portas: 4,
    placa: "",
    destaque: true,
    descricao: "Toyota Corolla XEi 1.8 Automático 2009 Flex, cor preta. Bem conservado, pintura preta brilhante e interior com bancos em couro cinza (com pequeno desgaste no assento do motorista, condizente com a idade). Equipado com engate traseiro e calhas de chuva nas janelas. Somente venda ou troca por caminhonete. 3 meses de garantia para motor e câmbio.",
    opcionais: ["Bancos de couro cinza", "Engate traseiro", "Calhas de chuva"],
    imagens: [
      "/images/corolla-2009-1.jpg",
      "/images/corolla-2009-2.jpg",
      "/images/corolla-2009-3.jpg",
      "/images/corolla-2009-4.jpg",
      "/images/corolla-2009-5.jpg"
    ]
  },
  {
    id: "2",
    marca: "Fiat",
    modelo: "Uno",
    versao: "Way",
    ano: 2014,
    preco: 15000,
    combustivel: "Flex",
    cambio: "Manual",
    cor: "Verde limão",
    portas: 4,
    placa: "",
    destaque: false,
    descricao: "Fiat Uno em excelente condição, cor verde-claro com detalhes em cinza escuro nos para-lamas e para-choques. Carroceria sem amassados ou riscos aparentes; pneus e rodas bem cuidados. Pagamento via PIX. Possibilidade de quitação e futura transferência para o nome do comprador ou aquisição para rodar com procuração, mantendo no nome atual (avaliar implicações legais). Ótima opção urbana: econômico, ágil e de fácil manutenção.",
    opcionais: ["Direção hidráulica"],
    imagens: [
      "/images/uno-verde-1.jpg"
    ]
  },
  {
    id: "3",
    marca: "Chevrolet",
    modelo: "Spin",
    versao: "LT 1.8 8V 5 Lugares",
    ano: 2017,
    preco: 45000,
    combustivel: "Flex",
    cambio: "Manual",
    cor: "Branco",
    portas: 5,
    placa: "",
    destaque: false,
    descricao: "Chevrolet Spin 1.8 8V LT 2017, 5 lugares. Espaçosa, ideal para famílias, com amplo porta-malas. Laudo cautelar aprovado. Preço abaixo da referência de mercado: FIPE R$ 48.000,00 e preço de venda R$ 45.000,00 (desconto de R$ 3.000,00). Mecânica robusta e de fácil manutenção.",
    opcionais: [],
    imagens: [
      "/images/spin-2017-1.jpg"
    ]
  },
  {
    id: "4",
    marca: "Volkswagen",
    modelo: "Fox",
    versao: "1.0 Flex",
    ano: 2012,
    preco: 31990,
    combustivel: "Flex",
    cambio: "Manual",
    cor: "Prata",
    portas: 4,
    placa: "",
    destaque: true,
    descricao: "Volkswagen Fox 1.0 Flex 2012. Posição de dirigir elevada, excelente visibilidade e interior espaçoso para um compacto. Direção hidráulica de fábrica, ideal para o uso urbano, primeiro carro ou rotina do trabalho. Preço alinhado à FIPE: R$ 31.990, refletindo o bom estado e conforto adicional da direção hidráulica.",
    opcionais: ["Direção hidráulica"],
    imagens: [
      "/images/fox-2012-1.jpg",
      "/images/fox-2012-2.jpg",
      "/images/fox-2012-3.jpg",
      "/images/fox-2012-4.jpeg"
    ]
  },
  {
    id: "5",
    marca: "Fiat",
    modelo: "Freemont",
    versao: "2.4 Automático 7 Lugares",
    ano: 2012,
    preco: 65000,
    combustivel: "Gasolina",
    cambio: "Automático",
    cor: "Prata",
    portas: 5,
    placa: "",
    destaque: true,
    descricao: "Fiat Freemont 2.4 Automático 2012, completo, com 7 lugares (3ª fileira). Condução confortável e segura, motor 2.4 robusto e câmbio automático suave. Valor premium R$ 65.000, ideal para quem busca a melhor unidade 2012 disponível, com quilometragem baixa e cuidados acima da média.",
    opcionais: [],
    imagens: [
      "/images/freemont-2012-1.jpeg",
      "/images/freemont-2012-2.jpeg",
      "/images/freemont-2012-3.jpeg",
      "/images/freemont-2012-4.jpeg"
    ]
  }
];

// Listas de opções para formulários
export const marcas = [
  "Audi",
  "BMW",
  "Chevrolet", 
  "Citroën",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Jeep",
  "Mercedes-Benz",
  "Nissan",
  "Peugeot",
  "Renault",
  "Toyota",
  "Volkswagen",
  "Volvo"
];

export const combustiveis = [
  "Flex",
  "Gasolina", 
  "Etanol",
  "Diesel",
  "Elétrico",
  "Híbrido"
];

export const cambios = [
  "Manual",
  "Automático",
  "CVT",
  "S-Tronic",
  "Tiptronic"
];

export const cores = [
  "Branco",
  "Preto", 
  "Prata",
  "Cinza",
  "Vermelho",
  "Azul",
  "Verde",
  "Amarelo",
  "Marrom",
  "Bege"
];