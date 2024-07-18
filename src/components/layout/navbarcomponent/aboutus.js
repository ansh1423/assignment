"use client"

import React from 'react';
import { AboutUsdata } from '@/src/constant/navbar/aboutUsData';
import Blog from '@/src/components/blog/Blogsection';
import Link from 'next/link';
// import Vision from '../../Phonemenucomponents/vision';

const Aboutus = () => {
  return (
    <div className='md:flex py-16'>
      {AboutUsdata.ArreyData.map((items, index) => (
        <div key={index} className='md:w-1/5 w-full'>
          <p className='text-white text-[18px] font-semibold'>{items.title}</p>
          {items.motive?.map((innerdata, innerindex) => (
            <p key={innerindex} className='text-white'>{innerdata.title}</p>
          ))}
        </div>
      ))}
      {/* <Vision/> */}
      <Link href={"/blog"} className='text-white'>Blog</Link>
    </div>
  );
};

export default Aboutus;
