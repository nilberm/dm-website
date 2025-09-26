// src/data/drawingTypes.ts
export interface DrawingTypeConfig {
  slug: string;
  name: string;
  basePrice: number; // valor base (não é usado diretamente, mas para referência)
  personPrices: {
    busto: number;
    meioCorpo: number;
    corpoInteiro: number;
  };
  petPrice: number;
  description: string;
  images: string[]; // URL de imagens para a galeria
}

// Dados padrão - serão sobrescritos pelos dados do JSON em produção
export const drawingTypes: DrawingTypeConfig[] = [
  {
    slug: "type-1",
    name: "Portrait Realista",
    basePrice: 120,
    personPrices: {
      busto: 80,
      meioCorpo: 120,
      corpoInteiro: 160,
    },
    petPrice: 40,
    description:
      "Desenho realista, estilo retrato. Captura a essência do seu rosto com detalhes precisos e sombra suave.",
    images: [
      "https://picsum.photos/600/600?random=1",
      "https://picsum.photos/600/600?random=2",
      "https://picsum.photos/600/600?random=3",
      "https://picsum.photos/600/600?random=4",
    ],
  },
  {
    slug: "type-2",
    name: "Retrato de Pet",
    basePrice: 90,
    personPrices: {
      busto: 0, 
      meioCorpo: 90,
      corpoInteiro: 0,
    },
    petPrice: 30,
    description:
      "Retrato digital do seu pet. Foco no rosto e expressão do animal, com cores vibrantes e fundo simples.",
    images: [
      "https://picsum.photos/600/600?random=5",
      "https://picsum.photos/600/600?random=6",
      "https://picsum.photos/600/600?random=7",
    ],
  },
  {
    slug: "type-3",
    name: "Fantasy Scene",
    basePrice: 150,
    personPrices: {
      busto: 0,
      meioCorpo: 150,
      corpoInteiro: 0,
    },
    petPrice: 50,
    description:
      "Cenário fantástico com personagens medievais, dragões ou elfos. Ideal para capa de livro ou poster temático.",
    images: [
      "https://picsum.photos/600/600?random=8",
      "https://picsum.photos/600/600?random=9",
      "https://picsum.photos/600/600?random=10",
    ],
  },
];
