import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import ProductsService from '../../services/ProductsService';

export default function useDoces() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const cakes = useMemo(() => products.filter((product) => (
    product.category.name === 'Bolos'
  )), [products]);

  const candys = useMemo(() => products.filter((product) => (
    product.category.name === 'Docinhos'
  )), [products]);

  const desserts = useMemo(() => products.filter((product) => (
    product.category.name === 'Sobremesas'
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

  return {
    isLoading,
    hasError,
    cakes,
    candys,
    desserts,
    handleTryAgain,
  };
}
