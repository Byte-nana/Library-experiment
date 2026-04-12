import React, { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('fetching...');

    setLoading(true);
    setError(undefined);

    fetch(`/data/${salesOnly ? 'sales_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴🔥🔥🔥🔥');

        setProducts(data);
      })
      .catch((error) => setError(`Error occur! ${error}`))
      .finally(() => setLoading(false));

    return () => {
      console.log('데이터를 깨끗히 청소하는 일을 합니다🧹');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
