import { v4 as uuidv4 } from 'uuid';
import CarouselImages from '../../components/CarouselImages';

import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';

import { Container } from './style';

import cupkake from '../../assets/images/doces/cupkake.jpeg';
import bolo from '../../assets/images/doces/chocolate.jpeg';
import doce from '../../assets/images/doces/doces.jpeg';
import docinho from '../../assets/images/doces/docinho.jpeg';
import torta from '../../assets/images/doces/torta.jpeg';

export default function Doces() {
  const cakes = [
    {
      id: uuidv4(), name: 'Abacaxi c/ creme belga', price: 67, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Pêssego c/ creme belga', price: 67, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Cenoura trufado', price: 67, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Brigadeiro', price: 67, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Prestigio', price: 67, unit: '(Kg)',
    },

    {
      id: uuidv4(), name: 'Brigadeiro c/ mousse maracujá', price: 72, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Abacaxi c/ ninho', price: 72, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: '4 leites', price: 72, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Paçoca', price: 72, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Leite ninho', price: 72, unit: '(Kg)',
    },

    {
      id: uuidv4(), name: 'Leite condensado c/ morango', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Creme belga c/ morango', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Brigadeiro c/ morango', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Ninho c/ morango', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Limão c/ brigadeiro', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Brigadeiro c/ pedacinho de chocolate', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Doce de leite c/ coco', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Doce de leite c/ ameixa', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Abacaxi c/ creme de coco', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Abacaxi c/ doce de leite', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Dois amores (chocolate branco e chocolate preto)', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Choconinho', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Churros', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Bem casado', price: 75, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Floresta negra', price: 75, unit: '(Kg)',
    },

    {
      id: uuidv4(), name: 'Red Velvet', price: 85, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Ganache', price: 85, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Naked cake', price: 85, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Ouro branco', price: 85, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Sonho de valsa', price: 85, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Floresta negra com morango', price: 85, unit: '(Kg)',
    },

    {
      id: uuidv4(), name: 'Milho, Fubá, Laranja', price: 27, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Chocolate ou cenoura c/ calda', price: 30, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Coco c/ calda', price: 30, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Vulcão de chocolate ou cenoura', price: 40, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Piscina de paçoca c/ cobertura de brigadeiro de paçoca', price: 50, unit: '(Kg)',
    },

    {
      id: uuidv4(), name: 'Piscina de cenoura c/ cobertura de brigadeiro', price: 55, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Piscina de chocolate c/ cobertura de brigadeiro.', price: 55, unit: '(Kg)',
    },
    {
      id: uuidv4(), name: 'Piscina massa branca c/ cobertura de  brigadeiro de ninho', price: 58, unit: '(Kg)',
    },

  ];

  const candys = [
    {
      id: uuidv4(), name: 'Brigadeiro', price: 118, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Beijinhos', price: 118, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Cajuzinho', price: 118, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Bicho de Pé', price: 118, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Ninho', price: 118, unit: '(cento)',
    },

    {
      id: uuidv4(), name: 'Casadinho (brigadeiro branco c/ preto)      ', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Brigadeiro Belga', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Chocolate branco', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Ninho com Nutella', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Surpresa de uva', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Olho de sogra', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Doce de leite', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Limão siciliano', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Churros', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Paçoca', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Nozes', price: 148, unit: '(cento)',
    },
    {
      id: uuidv4(), name: 'Maracujá', price: 148, unit: '(cento)',
    },
  ];

  const desserts = [
    {
      id: uuidv4(), name: 'Pavê ouro branco', price: 85, unit: '',
    },
    {
      id: uuidv4(), name: 'Pavê sonho de valsa', price: 80, unit: '',
    },
    {
      id: uuidv4(), name: 'Torta holandesa', price: 79, unit: '',
    },
    {
      id: uuidv4(), name: 'Pavê de abacaxi', price: 75, unit: '',
    },
    {
      id: uuidv4(), name: 'Cheesecake c/ geleia de morango', price: 75, unit: '',
    },
    {
      id: uuidv4(), name: 'Pavê de pêssego', price: 70, unit: '',
    },
    {
      id: uuidv4(), name: 'Bombom de morango c/ cobertura de ganache', price: 69, unit: '',
    },
    {
      id: uuidv4(), name: 'Surpresa de uva', price: 68, unit: '',
    },
    {
      id: uuidv4(), name: 'Torta de morango', price: 68, unit: '',
    },
    {
      id: uuidv4(), name: 'Creme de paçoca c/ ganache', price: 68, unit: '',
    },
    {
      id: uuidv4(), name: 'Banoffe', price: 66, unit: '',
    },
    {
      id: uuidv4(), name: 'Torta de limão', price: 63, unit: '',
    },
  ];

  const images = [
    {
      id: uuidv4(), src: cupkake, alt: 'Cup',
    },
    {
      id: uuidv4(), src: bolo, alt: 'Bolo',
    },
    {
      id: uuidv4(), src: doce, alt: 'doce',
    },
    {
      id: uuidv4(), src: docinho, alt: 'docinho',
    },
    {
      id: uuidv4(), src: torta, alt: 'torta',
    },
  ];

  return (

    <Container>
      <PageHeader title="Uma Jornada Irresistível de Sabores!" />

      <CarouselImages images={images} />

      <Card
        title="Transforme seu dia em uma festa com nossos bolos !"
        subTitle="Bolos"
        information={[
          'Valores abaixo válidos para decoração em chantininho até duas cores ou granulado!',

          'Aplicação de glitter colorido a partir de 15,00 Decoração a partir de 3 cores diferentes no chantilly (exceto degradê) terá acréscimo de 10,00',

          'Decoração de bolo com ganache a partir de 25,00 para bolo redondo de até 1,5kg. Demais tamanhos, consultar valores!',
        ]}
        items={cakes}
      />

      <Card
        title="Um sabor especial para o seu paladar! Deixe a vida mais doce."
        subTitle="Docinhos"
        information={[
          'Embalados em duas forminhas, sendo a primeira na forminha redonda e a outra na forma quatro pétalas branca. Pedido mínimo 25 do mesmo sabor!',
        ]}
        items={candys}
      />

      <Card
        title="Valores que vão adoçar seu dia!"
        subTitle="Sobremesas"
        information={['Sobremesas na travessa de acrílico']}
        items={desserts}
      />

    </Container>

  );
}
