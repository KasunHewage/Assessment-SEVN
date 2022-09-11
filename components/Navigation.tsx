import Image from "next/image";
import React, { useEffect, useState } from "react";
import RightIcon from "../public/images/nav-right-icon-2.png";
const BGIMAGE = "/images/navimage.png";

const Navigation = (props: { isNav: boolean; setIsNav: any }) => {
  const [clicked, setClicked] = useState(false);

  console.log(clicked);
  return (
    <div className=" h-screen bg-black flex items-center justify-end relative ">
      <div className=" top-0 mx-[23px] absolute h-[82px] md:mx-[81px] md:h-[103px] flex justify-between items-end md:items-center pb-[7.96px] md:pb-0">
        <div className={` w-[24.91px] md:w-[39px] h-[24px] md:h-[39px]`}>
          <Image
            src={RightIcon}
            onClick={() => {
              setClicked(!clicked);
              setTimeout(() => {
                props.setIsNav(!props.isNav);
              }, 300);
            }}
            className={`${
              clicked ? "rotate-45" : ""
            } duration-200 ease-in-out cursor-pointer z-40 scale-150 rotate-90`}
          />
        </div>
      </div>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: "url(" + BGIMAGE + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " contain, auto",
        }}
      >
        <div className="  w-full h-screen flex flex-col items-center leading-[185px] justify-center align-middle left-0 text-center absolute  tracking-[0.44em] text-white font-prompt font-[700] text-[30px] lg:text-[100px]">
          <p className=" cursor-pointer">OUR WORK</p>
          <p className=" cursor-pointer">ABOUT US</p>
          <p className=" cursor-pointer">CONTACT</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
