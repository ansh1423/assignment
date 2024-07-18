"use client";

import React from "react";
import { TechnologyData } from "@/src/constant/navbar/technologiesData";
import { useRouter } from "next/navigation";

const Technologies = () => {

  const navigate = useRouter();
  const handleNavigate = async (tech) => {
    
    const url = `/technology/${tech?.toLowerCase().replace(/\s+/g, '')}`;

    try {
      await navigate.push(url);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="w-full flex justify-end">
      {Object.keys(TechnologyData).map((blockKey, index) => (
        <div key={index} className="w-1/5 py-10">
          {TechnologyData[blockKey].map((item, itemIndex) => (
            <div key={itemIndex}>
              <p className="font-bold py-4 text-white text-[18px] leading-[20px]">
                {item.title}
              </p>
              <div className="flex flex-col">
                {item.techName.map(({ tech, icon }, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex pt-3 items-center gap-3 "
                  >
                    <div className=" rounded-full ">
                      <p className="text-white p-1 shadow-xl rounded-full">{icon}</p>
                    </div>
                    <p className="text-white font-semibold cursor-pointer"
                    onClick={() => handleNavigate(tech)}
                    >{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Technologies;