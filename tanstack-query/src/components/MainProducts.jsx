import React, { useState } from 'react';
import Products from './Products.jsx';
import { useQueryClient } from '@tanstack/react-query';

export default function MainProducts() {
  const queryClient = useQueryClient();

  const [showRightProdcuts, setShowRightProducts] = useState(true);
  const [showLeftProdcuts, setShowLeftProducts] = useState(true);
  const handleClick = () => {
    queryClient.invalidateQueries({ queryKey: ['products'] });
  };

  return (
    <main className='w-4/5 grid grid-cols-2 p-6 mx-auto'>
      <div>
        {showRightProdcuts && <Products />}
        <button
          className='py-2 px-6 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-400'
          onClick={() => {
            setShowRightProducts((show) => !show);
          }}
        >
          toggle
        </button>
      </div>
      <div>
        {showLeftProdcuts && <Products />}
        <button
          className='py-2 px-6 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-400'
          onClick={() => {
            setShowLeftProducts((show) => !show);
          }}
        >
          toggle
        </button>
      </div>
      <button
        onClick={handleClick}
        className='mt-10 py-2 grid col-span-2 bg-red-400 border-4 border-transparent rounded-2xl text-white cursor-pointer hover:border-4 hover:border-red-400 hover:bg-transparent hover:text-black '
      >
        Information Updated!
      </button>
    </main>
  );
}
