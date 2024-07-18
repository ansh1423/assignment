"use client";

import React from "react";
import { ServiceDataBlock1 } from "@/src/constant/navbar/serviceData";
import { serviceDataBlock2 } from "@/src/constant/navbar/serviceData";
import { useRouter } from "next/navigation";

const Servicesection = () => {

  const navigate = useRouter();
  const handleNavigate = async (tech) => {
    
    const url = `/service/${tech?.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}`;

    try {
      await navigate.push(url);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="md:flex my-10 text-white">
      <div className="md:w-1/2 md:flex">
        {ServiceDataBlock1?.map((section, index) => (
          <div key={index} className="md:w-1/2">
            <p className="text-[20px] font-bold cursor-pointer">
              {section?.title}
            </p>
            <div className="pt-3">
              {section?.Data?.map((item, itemIndex) => (
                <div key={itemIndex} className="pt-2 border-l-2 ml-2">
                  <div className="pl-4 inter cursor-pointer"
                  onClick={() => handleNavigate(item?.tech)}
                  >{item?.tech}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-1/2 md:flex">
        {serviceDataBlock2.map((section, index) => (
          <div key={index} className="md:w-1/2">
            {section?.Data?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="inter text-[20px] font-bold cursor-pointer hover:text-blue-700 pt-2"
                onClick={() => handleNavigate(item?.tech)}
              >
                {item?.tech}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicesection;
