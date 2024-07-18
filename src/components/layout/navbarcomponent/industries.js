"Use client";

import { IndustriesData } from "@/src/constant/navbar/industriesData";
import React from "react";
import { useRouter } from "next/navigation";

const Industries = () => {

  const navigate = useRouter();
  const handleNavigate = async (title) => {
    
    const url = `/industry/${title?.toLowerCase().replace(/\s+/g, '-')}`;

    try {
      await navigate.push(url);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="w-full flex gap-12 py-16">
      <div className="w-1/3">{IndustriesData?.Blocks.section1}</div>
      <div className="w-1/3">
        {IndustriesData?.Blocks?.section2?.map((items, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(items?.title)}
            className="pb-3 border-l-2 border-blue-200 pl-3 font-semibold text-white cursor-pointer"
          >
            {items?.title}
          </div>
        ))}
      </div>
      <div className="w-1/3">{IndustriesData?.Blocks?.section3}</div>
    </div>
  );
};

export default Industries;
