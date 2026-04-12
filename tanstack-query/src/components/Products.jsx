import React, { useId, useState } from 'react';
// import useProducts from '../hooks/use-products';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
  const checkboxId = useId();
  const [checked, setChecked] = useState(false);
  // const [loading, error, products] = useProducts({ salesOnly: checked });

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products', checked],
    queryFn: async () => {
      console.log('fetching...');
      const res = await fetch(`/data/${checked ? 'sales_' : ''}products.json`);
      return await res.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <p>Loading...😉</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <input
        onChange={() => setChecked((check) => !check)}
        type='checkbox'
        name='checkbox'
        id={checkboxId}
        checked={checked}
      />
      <label htmlFor={checkboxId}>Show Only 🔥🔥🔥 Sale</label>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <p className='text-2xl font-semibold'>{p.name}</p>
            <p>{p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
