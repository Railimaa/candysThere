/* eslint-disable react/jsx-no-bind */
import { Container } from './style';

import Loader from '../../components/Loader';
import ErrorStatus from '../../components/ErrorStatus';
import PageHeader from '../../components/PageHeader';
import CarouselImages from '../../components/CarouselImages';
import Card from '../../components/Card';
import useDoces from './useDoces';

export default function Doces() {
  const {
    isLoading,
    hasError,
    cakes,
    candys,
    desserts,
    handleTryAgain,
  } = useDoces();

  const images = [
    {
      id: '1', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/doces/cupkake.jpeg', alt: 'cup',
    },
    {
      id: '2', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/doces/chocolate.jpeg', alt: 'Bolo',
    },
    {
      id: '3', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/doces/doces.jpeg', alt: 'doce',
    },
    {
      id: '4', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/doces/torta.jpeg', alt: 'pave',
    },
    {
      id: '5', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/doces/docinho.jpeg', alt: 'docinho',
    },
  ];

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasError && (
        <>
          <ErrorStatus onTryAgain={handleTryAgain} />
          <CarouselImages images={images} />

        </>
      )}

      {!hasError && (
        <>
          <PageHeader title="Uma Jornada Irresistível de Sabores!" />

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

        </>
      )}

    </Container>
  );
}
