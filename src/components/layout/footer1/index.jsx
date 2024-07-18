
'use client'

import { Footer1Data } from '@/constant/footer1.jsx copy/Footer1Data';
// import { Footer1Data } from '@/constant/footer1.jsx/Footer1Data';
// import { Footer1Data } from '@/src/constant/footer1.jsx/Footer1Data';
import { useRouter } from 'next/navigation'
// import Footer1Data from "@/src/constant/footer1.jsx/Footer1Data";
// import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';

function Footer1() {
   const router = useRouter();
  // console.log()
  return (
    <div>
      <div className='h-[100px] inter fixed bottom-0 w-full p-2 text-center  max-md:flex bg-[#121212]  md:hidden  flex items-center justify-between'>
        {Footer1Data && Footer1Data.map((item) => (
         <div key={item.data} className='w-[100%] text-white hover:text-blue-700' onClick={() => router.push(item.routes)} >
         <div className="flex items-center justify-center">
           {item.icons}
         </div>
         <h2 className='text-[#FCFCFC] mt-2 hover:text-blue-700 focus:outline-none text-[14px] text-center font-[500]'>{item.data}</h2>
       </div>
        ))}
      </div>
    </div>
  );
}

export default Footer1;
