"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HireData } from "@/src/constant/navbar/hireData";

const HireSection = () => {

  const navigate = useRouter();
  const handleNavigate = async (name) => {

    const url = `/hire/${name?.toLowerCase().replace(/\s+/g, '-')}`;

    try {
      await navigate.push(url);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="w-full flex py-10">
      <div className="w-2/5">
        <p className="text-[18px] font-bold py-4 text-white">{HireData?.TrendingData?.title}</p>
        <div className="grid grid-cols-2">
          {HireData?.TrendingData?.Category?.map((items, index) => (
            <div key={index} className="border-l-2 pl-3">
              <p className="cursor-pointer text-white pt-3 font-semibold"
                onClick={() => handleNavigate(items?.name)}
              >{items?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-3/5">
        {HireData?.CategoryData?.map((item, index) => (
          <div key={index} className="w-1/3" >
            <p className="text-white text-[18px] font-bold py-4">{item?.heading}</p>
            {item?.subcategory?.map((items, id) => (
              <div key={id} >
                <p className="pt-3 cursor-pointer text-white font-semibold"
                onClick={() => handleNavigate(items?.name)}
                >{items?.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireSection;
