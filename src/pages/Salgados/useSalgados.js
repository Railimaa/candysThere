import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import ProductsService from '../../services/ProductsService';

export default function useSalgados() {
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

  return {
    isLoading,
    hasError,
    pies,
    patty,
    quiches,
    handleTryAgain,
  };
}
