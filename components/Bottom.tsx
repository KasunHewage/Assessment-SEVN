import Image from "next/image";
import IconLion from "../public/images/nav-left-icon.png";
import React from "react";

const Bottom = () => {
  return (
    <div>
      <div className=" flex items-center justify-center pb-[300px]">
        <p className=" border-b-[1px] border-solid border-[#16929A] inline uppercase text-white font-prompt font-[700]  text-[28px] lg:text-[40px] text-center">
          see more work
        </p>
      </div>

      <div className=" pb-[100px]">
        <p className=" uppercase text-white font-prompt font-[700] text-[32px]  lg:text-[121px] text-center tracking-[0.1em]">
          work with us
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center">
        <p className=" border-b-[1px] border-solid border-white pb-2 text-[18px] inline text-[#16929A] font-[700] lg:text-[50px] font-prompt text-center">
          hello@northliondigital.com
        </p>
        <span className=" mt-[53px]">
          <Image src={IconLion} width={"58px"} height={"64px"} />
        </span>
      </div>

      <div className=" text-white tracking-[0.14em] leading-[45px] flex items-center justify-between mt-[173px] font-prompt font-[700] text-[13px] lg:text-[30px] ">
        <p>INSTAGRAM</p>
        <p>+1 22 222 2222</p>
        <p>LINKEDIN</p>
      </div>
    </div>
  );
};

export default Bottom;
