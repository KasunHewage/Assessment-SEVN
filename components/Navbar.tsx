import Image from "next/image";
import LeftIcon from "../public/images/nav-left-icon.png";
import RightIcon from "../public/images/nav-right-icon.png";

const Navbar = () => {
  return (
    <div className=" h-[82px] md:h-[103px] flex justify-between items-end md:items-center pb-[7.96px] md:pb-0">
      <div className=" w-[28px] md:w-[58px] h-[30.02px] md:h-[64px]">
        <Image src={LeftIcon} />
      </div>
      <div className=" w-[24.91px] md:w-[39px] h-[24px] md:h-[39px]">
        <Image src={RightIcon} />
      </div>
    </div>
  );
};

export default Navbar;
