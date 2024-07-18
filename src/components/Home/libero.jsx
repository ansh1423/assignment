import Image from 'next/image';
import React from 'react';

function Libero() {
  return (
    <div className='flex items-center justify-center bg-[#F5F7FA] '>
      <div className='w-[80%] max-sm:w-full max-sm:px-4 max-w-xl px-10 py-8 bg-[#F5F7FA] text-center relative'>
        <p className='font-semibold text-4xl max-sm:text-[35px] text-gray-800 mb-6'>Pellentesque suscipit fringilla libero eu.</p>
        <div className='flex items-center justify-center'>
        <button className='relative flex items-center justify-center gap-2 text-white bg-[#4CAF4F] px-6 py-3 rounded-lg shadow-md transition-colors duration-300'>
          Get Demo
          <Image src="/right.png" alt="Logo" width={20} height={20} className="object-cover" />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Libero;
