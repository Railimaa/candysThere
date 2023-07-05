/* eslint-disable react/jsx-no-bind */
import { Container } from './style';

import Loader from '../../components/Loader';
import ErrorStatus from '../../components/ErrorStatus';
import PageHeader from '../../components/PageHeader';
import CarouselImages from '../../components/CarouselImages';
import Card from '../../components/Card';

import useSalgados from './useSalgados';

export default function Salgados() {
  const {
    isLoading,
    hasError,
    pies,
    patty,
    quiches,
    handleTryAgain,
  } = useSalgados();

  const images = [
    {
      id: '1', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/salgados/empadao.jpeg', alt: 'empadao',
    },
    {
      id: '2', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/salgados/empadinha.jpeg', alt: 'empadinha',
    },
    {
      id: '3', src: 'https://therecandys.s3.sa-east-1.amazonaws.com/salgados/quiche.jpeg', alt: 'quiche',
    },
  ];

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasError && (
        <ErrorStatus onTryAgain={handleTryAgain} />
      )}

      {!hasError && (
        <>
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

        </>
      )}

    </Container>
  );
}
