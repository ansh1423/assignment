import Image from 'next/image';
import React from 'react';

function Lesson() {
  return (
    <div className='bg-[#F5F7FA] max-sm:px-4 pb-10 h-auto   '>
      <div className='flex flex-col justify-center items-center lg:flex-row pt-[100px]'>
        <div className='flex gap-16 max-md:flex-col-reverse items-center'>
        <div className=' text-center lg:text-left'>
          <p className='font-semibold text-black text-[35px] left-0   mb-2'>Lessons and insights</p>
          <span className='font-semibold text-[#4CAF4F] text-xl lg:text-3xl block mb-2'>from 8 years</span>
          <p className='text-[#717171] text-sm lg:text-[14px] mb-4'>Where to grow your business as a photographer: site or social media?</p>
          <button className='bg-[#4CAF4F] text-white   rounded-[4px] py-2 px-4'>Register</button>
        </div>
        <div className='mt-6  lg:mt-0'>
          <Image src='Illustration.svg' alt="Logo" width={300} height={100} className="object-cover" />
        </div>
        </div>
      </div>
      <div className='flex justify-center items-center pt-8'>
        <span className='h-2 w-2 bg-[#4CAF4F] rounded-full mx-1'></span>
        <span className='h-2 w-2 bg-[#4CAF4F] rounded-full mx-1'></span>
        <span className='h-2 w-2 bg-[#4CAF4F] rounded-full mx-1'></span>
      </div>
    </div>
  );
}

export default Lesson;
