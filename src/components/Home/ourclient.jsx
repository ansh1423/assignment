import { Clients } from "@/constant/client/client";
import React from "react";

function Ourclient() {
  return (
    <div className="flex bg-white items-center justify-center">
    <div className="pt-5 px-4 w-[80%]   text-[#18191F] bg-white">
      <div>
        <p className="font-inter font-semibold  text-[35px] leading-[44px] text-center">
          {" "}
          Our Clients
        </p>
        <p className="mb-8 max-sm:mb-1 py-3 text-[#717171] text-center text-[14px]">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex  mb-5 items-center justify-center ">
          <div className="w-[80%] py-4  flex justify-between items-center  ">
            {Clients.map((client, index) => (
              <div key={index}>
                <img src={client.Image} alt={`Client ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Ourclient;
