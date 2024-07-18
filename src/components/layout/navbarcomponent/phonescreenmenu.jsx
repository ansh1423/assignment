"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Servicesection from '../../Phonemenucomponents/servicesection'
import Technology from '../../Phonemenucomponents/technology'
import Industrysection from '../../Phonemenucomponents/industry'
import Vision from '../../Phonemenucomponents/vision'
import Contact from '../../Phonemenucomponents/contact'
import Processsection from '../../Phonemenucomponents/processes'
import Hiresection from '../../Phonemenucomponents/hire';
import Socialmediaphone from '@/src/content/socialmediaphone';

const Phonescreenmenu = ({toggleList}) => {
    const [mainblock, setMainblock] = useState(null);
    return (
        <div className=' opacity-[97%] w-full h-full !min-h-full overflow-y-auto relative'>
            {mainblock === null && (
                <div className="fixed   overflow-y-auto  opacity-[99%] w-full flex !justify-between flex-col  h-full  min-h-full z-[9999] mb-[200px] pt-[100px]">
                    <div className="flex flex-col mb-0 items-center !h-[100%]">
                        <div className=" w-11/12 flex flex-col text-white gap-2 text-xl font-semibold">
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/service">SERVICES</Link>
                                <NavigateNextIcon
                                    onClick={() => setMainblock("service")}
                                />
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/blog">TECHNOLOGIES</Link>
                                <NavigateNextIcon
                                    onClick={() => setMainblock("technology")}
                                />
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/carrier">INDUSTRIES</Link>
                                <NavigateNextIcon
                                    onClick={() => setMainblock("industry")}
                                />
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/service">HIRE</Link>
                                <NavigateNextIcon
                                    onClick={() => setMainblock("hire")}
                                />
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/carrier">PROCESS</Link>
                                <NavigateNextIcon
                                    onClick={() => setMainblock("process")}
                                />
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/about">VISION</Link>
                                <NavigateNextIcon
                                    onClick={() => setMainblock("vision")}
                                />
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/casestudy">CASE STUDIES</Link>
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/client">CLIENT</Link>
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/blog">BLOGS</Link>
                            </div>
                            <div className="flex justify-between text-[16px] items-center border-b pb-2 border-[#EEE] border-opacity-40">
                                <Link href="/about">ABOUT US</Link>
                            </div>
                            <div className="flex justify-between text-[16px] items-center pb-3 ">
                                <Link href="/contact">CONTACT US</Link>
                                <NavigateNextIcon
                                    onClick={() => setMainblock("contact")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Socialmediaphone />
                    </div>
                </div>
            )}

            {mainblock == "service" && (
                <div className='!w-full   opacity-[97%] overflow-y-auto  mt-[100px] h-full min-h-[80vh] fixed'>
                    <Servicesection mainblock={setMainblock} toggleList={toggleList}/>
                </div>
            )}

            {mainblock == "technology" && (
                <div className='fixed !w-full   opacity-[97%] mt-[100px] h-full min-h-[80vh]'>
                    <Technology mainblock={setMainblock} toggleList={toggleList}/>
                </div>
            )}

            {mainblock == "industry" && (
                <div className='fixed !w-full   opacity-[97%] mt-[100px] h-full min-h-[80vh] '>
                    <Industrysection mainblock={setMainblock} toggleList={toggleList} />
                </div>
            )}

            {mainblock == "hire" && (
                <div className='fixed !w-full   opacity-[97%] mt-[100px] h-full min-h-[80vh]'>
                    <Hiresection mainblock={setMainblock} toggleList={toggleList}/>
                </div>
            )}

            {/* {mainblock == "casestudy" && (
                <div className='fixed !w-full   opacity-[97%] mt-[100px] !min-h-full'>
                    <Servicesection mainblock={setMainblock} />
                </div>
            )} */}

            {mainblock == "process" && (
                <div className='fixed !w-full   opacity-[97%] mt-[100px] h-full min-h-[80vh]'>
                    <Processsection mainblock={setMainblock} toggleList={toggleList} />
                </div>
            )}

            {mainblock == "vision" && (
                <div className='fixed !w-full   opacity-[97%] mt-[100px] h-full min-h-[80vh]'>
                    <Vision mainblock={setMainblock} toggleList={toggleList}/>
                </div>
            )}

            {mainblock == "contact" && (
                <div className='fixed !w-full   opacity-[97%] mt-[100px] h-full min-h-[80vh]'>
                    <Contact mainblock={setMainblock} toggleList={toggleList}/>
                </div>
            )}
        </div>
    )
}

export default Phonescreenmenu