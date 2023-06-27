/* eslint-disable react/jsx-no-bind */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import ProductsService from '../../services/ProductsService';
import { Loader } from '../../components/Loader';

import CarouselImages from '../../components/CarouselImages';

import PageHeader from '../../components/PageHeader';
import { Container } from './style';

import empadao from '../../assets/images/salgados/empadao.jpeg';
import empadinha from '../../assets/images/salgados/empadinha.jpeg';
import quiche from '../../assets/images/salgados/quiche.jpeg';
import Card from '../../components/Card';
import ErrorStatus from '../../components/ErrorStatus';

// import queijo from '../../assets/images/salgados/queijo.png';
// import frango from '../../assets/images/salgados/frango.png';
// import burguer from '../../assets/images/salgados/burguer.png';
// import marguerita from '../../assets/images/salgados/marguerita.png';

export default function Salgados() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const pies = useMemo(() => products.filter((product) => (
    product.category.name === 'Tortas'
  )), [products]);

  const patty = useMemo(() => products.filter((product) => (
    product.category.name === 'Empadas'
  )), [products]);

  const quiches = useMemo(() => products.filter((product) => (
    product.category.name === 'Quiches'
  )), [products]);

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);

      const productsList = await ProductsService.listProducts();

      setHasError(false);
      setProducts(productsList);
    } catch {
      setHasError(true);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  function handleTryAgain() {
    loadProducts();
  }

  const images = [
    {
      id: '1', src: empadao, alt: 'empadao',
    },
    {
      id: '2', src: empadinha, alt: 'empadinha',
    },
    {
      id: '3', src: quiche, alt: 'quiche',
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
