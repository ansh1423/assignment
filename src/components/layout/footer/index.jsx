import { FooterData } from "@/constant/footer/FooterData";
import { SocialmediaData } from "../contents/socialmedialink";
import Image from 'next/image';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Footer = () => {
  // Assuming you have a state or prop to manage dark mode
  const isDarkMode = true; // Replace with your dark mode state

  return (
    <div className={`max-md:hidden relative flex bg-black text-${isDarkMode ? 'white' : 'black'} flex-col items-center justify-center w-full pt-8`}>
      <div className="w-[45px] h-[105px] absolute left-0 bottom-0 rounded-tr-2xl bg-[#0C487B]"></div>
      <div className="w-[45px] h-[260px] absolute right-0 top-10 rounded-tl-2xl rounded-bl-2xl bg-[#0C487B]"></div>
      <div className="w-[80%] max-xl:w-[90%] max-lg:w-full h-[276px] justify-between flex-wrap flex">
        <div className="w-[30%] text-black">
          <div className="py-1 dark:hidden">
            <Image src='/Footer/Logo.png' alt="Logo" width={140} height={100} className="object-cover" />
          </div>
          <div className="py-1 dark:flex hidden">
            <Image src='/Footer/Logo.png' alt="Footer Logo" width={139} height={100} className="object-cover" />
          </div>
          <div className="py-1">
            <h5 className={`text-[15px] my-2 text-${isDarkMode ? 'white' : 'black'}`}>{FooterData.section1.content}</h5>
          </div>
          <div className="py-1 flex gap-4 items-center">
            {SocialmediaData?.map((items, index) => (
              <Box className="rounded-full p-[10px] bg-[#4D4D4D] shadow-2xl"  key={index}>
                <Image width={20} height={20} src={items?.IconClass}></Image>
                {/* <Link href={items?.link} className={`text-${isDarkMode ? 'white' : 'black'}`}>{items?.IconClass}</Link> */}
              </Box>
            ))}
          </div>
        </div>
        <div className="flex text-black justify-between w-[30%] max-lg:gap-8">
          <div>
            <div className="mb-4">
              <h1 className="font-semibold">{FooterData.section2.heading}</h1>
            </div>
            <div>
              {FooterData.section2.content.map((item, i) => (
                <div key={i} className={`my-2 text-${isDarkMode ? 'white' : 'black'} text-[14px]`}>
                  <Link href={item?.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-black">
              <h1 className="font-semibold">{FooterData.section3.heading}</h1>
            </div>
            <div>
              {FooterData.section3.content.map((item, i) => (
                <p key={i} className={`my-2 text-${isDarkMode ? 'white' : 'black'} text-[14px]`}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="mb-4">
            <h1 className="font-semibold">{FooterData.section4.heading}</h1>
          </div>
          <div className="relative w-[76%] text-[#D9DBE1] bg-[#FFFFFF] border-2 rounded-lg shadow-md">
            <input
              type="text"
              className={`w-full py-2 pl-4 pr-12 rounded-lg text-[#D9DBE1] dark:text-white text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your email address"
            />
            <Image
              src='/Footer/vector.png'
              alt="Logo"
              width={19}
              height={10}
              className="absolute top-1/2 transform -translate-y-1/2 right-4 object-cover dark:text-black"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center py-5 border-t dark:border-white border-black w-full justify-center">
        <div className="w-[70%] text-[14px] flex items-center justify-between">
          <div>
            <h1 className="text-[14px]">&copy; All rights reserved </h1>
          </div>
          <div className="flex gap-4">
            <p>Private Policy</p>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
