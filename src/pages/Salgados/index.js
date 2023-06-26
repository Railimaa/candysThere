import { v4 as uuidv4 } from 'uuid';
import CarouselImages from '../../components/CarouselImages';

import PageHeader from '../../components/PageHeader';
import { Container } from './style';

import empadao from '../../assets/images/salgados/empadao.jpeg';
import empadinha from '../../assets/images/salgados/empadinha.jpeg';
import quiche from '../../assets/images/salgados/quiche.jpeg';
import Card from '../../components/Card';

// import queijo from '../../assets/images/salgados/queijo.png';
// import frango from '../../assets/images/salgados/frango.png';
// import burguer from '../../assets/images/salgados/burguer.png';
// import marguerita from '../../assets/images/salgados/marguerita.png';

export default function Salgados() {
  const images = [
    {
      id: uuidv4(), src: empadao, alt: 'empadao',
    },
    {
      id: uuidv4(), src: empadinha, alt: 'empadinha',
    },
    {
      id: uuidv4(), src: quiche, alt: 'quiche',
    },
  ];

  const pies = [
    {
      id: uuidv4(), name: 'Palmito/Carne/Atum', price: 65, unit: '(cada)',
    },
    {
      id: uuidv4(), name: 'Escarola/Bacon/Queijo', price: 65, unit: '(cada)',
    },
    {
      id: uuidv4(), name: 'Frios', price: 61, unit: '(cada)',
    },
    {
      id: uuidv4(), name: 'Frango c/ Requeijão', price: 59, unit: '(cada)',
    },
    {
      id: uuidv4(), name: 'Calabresa c/ Catupiry', price: 59, unit: '(cada)',
    },

    {
      id: uuidv4(), name: 'Legumes', price: 55, unit: '(cada)',
    },
  ];

  const patty = [
    {
      id: uuidv4(), name: 'Palmito', price: 85, unit: '',
    },
    {
      id: uuidv4(), name: 'Frango', price: 72, unit: '',
    },
    {
      id: uuidv4(), name: 'Cuscuz Paulista', price: 59, unit: '',
    },
    {
      id: uuidv4(), name: 'Bolo pão de queijo', price: 39, unit: '',
    },
  ];

  const quiches = [
    {
      id: uuidv4(), name: 'Palmito', price: 73, unit: '',
    },
    {
      id: uuidv4(), name: 'Alho Poró', price: 69, unit: '',
    },
    {
      id: uuidv4(), name: 'Queijo', price: 68, unit: '',
    },
    {
      id: uuidv4(), name: 'Frango Cremoso', price: 65, unit: '',
    },
  ];

  return (
    <Container>
      <PageHeader title="Experiência Saborosa e Encantadora!" />

      <CarouselImages images={images} />

      <Card
        title="Permita-se saborear momentos de prazer com nossas tortas salgadas!"
        subTitle="Tortas"
        information={[]}
        items={pies}
      />

      <Card
        title="Desfrute da autenticidade dos nossos empadões! Uma receita tradicional que encanta paladares"
        subTitle="Empadões"
        information={['+- 1,5 (KG)']}
        items={patty}
      />

      <Card
        title="Deixe-se levar pela tentação dos nossos quiches! Cada pedaço é uma mistura de texturas e temperos que vai conquistar seu paladar"
        subTitle="Quiches"
        information={['+- 1,2 (KG)']}
        items={quiches}
      />
    </Container>
  );
}
