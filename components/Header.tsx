import { Slider } from "./Slider";

const Header = () => {
  return (
    <div>
      <div>
        <p className=" text-white text-center font-extrabold text-[32px] lg:text-[120px] font-prompt not-italic tracking-[0.25em] uppercase leading-[181px]">
          North Lion
        </p>
      </div>

      {/* slider */}
      <div className="  -mt-8 overflow-hidden">
        <Slider />
      </div>
    </div>
  );
};

export default Header;
