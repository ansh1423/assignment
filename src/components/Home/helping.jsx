import { helping } from '@/constant/helping/helping'; // Assuming `helping` is imported correctly
import Image from 'next/image';
import React from 'react';

function Helping() {
  return (
    <div className='mt-5 bg-[#F5F7FA] text-black px-4 py-8 md:py-16'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col justify-center items-center md:items-start'>
            <p className='font-semibold text-center md:text-left text-2xl md:text-[25px] lg:text-[35px] leading-tight'>Helping a local</p>
            <p className='font-semibold text-center md:text-left text-2xl md:text-[25px] lg:text-[35px] leading-tight text-[#4CAF4F]'>business reinvent itself</p>
            <p className='text-[#18191F] text-center md:text-left text-sm md:text-base'>We reached here with our hard work and dedication</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {helping.map((item, index) => (
              <div key={index} className='flex items-center'>
                <Image src={item.image} alt="Logo" width={30} height={30} className="object-cover" />
                <div className='ml-2'>
                  <p className='text-lg font-bold text-[#4D4D4D]'>{item.no}</p>
                  <p className='text-[#18191F]'>{item.people}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helping;
