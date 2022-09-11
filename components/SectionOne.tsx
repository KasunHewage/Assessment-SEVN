const LeftOne = "/images/leftone.png";
const LeftTwo = "/images/lefttwo.png";
const LeftThree = "/images/leftthree.png";
const RightOne = "/images/rightone.png";
const RightTwo = "/images/righttwo.png";
const RightThree = "/images/rightthree.png";

const SectionOne = () => {
  return (
    <div>
      <div className=" overflow-hidden">
        {/* one */}
        <div className=" grid grid-cols-12 gap-x-8 gap-y-[150px]">
          {/* left */}
          <div className=" col-span-12 lg:col-span-7 overflow-hidden">
            <div
              style={{
                backgroundImage: "url(" + LeftOne + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" h-[360px] lg:h-[788px]"
            ></div>

            <div className=" mt-[30px]">
              <h1 className="text-white text-[35px] font-prompt">
                ACME Drinks
              </h1>
              <p className=" text-white lg:pr-[55%] text-[18px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                purus services et porttitor quam lectus purus id. Leo.
              </p>
              <hr className=" mt-[24px] lg:w-[70%]" />
              <p className=" text-[#BDBDBD] lg:pr-[55%] text-[18px] font-[400] mt-[20px]">
                Brand, Strategy, Event, Social
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" col-span-12 lg:col-span-5">
            <div
              style={{
                backgroundImage: "url(" + RightOne + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" w-[490px] h-[490px]"
            ></div>

            <div className=" mt-[30px]">
              <h1 className="text-white text-[35px] font-prompt">
                ACME Drinks
              </h1>
              <p className=" text-white lg:pr-[40%] text-[18px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                purus services et porttitor quam lectus purus id. Leo.
              </p>
              <hr className=" mt-[24px] lg:w-[90%]" />
              <p className=" text-[#BDBDBD] lg:pr-[40%] text-[18px] font-[400] mt-[20px]">
                Brand, Strategy, Event, Social
              </p>
            </div>
          </div>
        </div>

        {/* two */}
        <div className=" mt-[132px] grid grid-cols-12 gap-x-8">
          {/* left */}
          <div className=" col-span-12 lg:col-span-7">
            <div
              style={{
                backgroundImage: "url(" + LeftTwo + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" w-[490px] h-[380px] lg:h-[490px]"
            ></div>

            <div className=" mt-[30px]">
              <h1 className="text-white text-[35px] font-prompt">
                ACME Drinks
              </h1>
              <p className=" text-white lg:pr-[55%] text-[18px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                purus services et porttitor quam lectus purus id. Leo.
              </p>
              <hr className=" mt-[24px] lg:w-[70%]" />
              <p className=" text-[#BDBDBD] lg:pr-[55%] text-[18px] font-[400] mt-[20px]">
                Brand, Strategy, Event, Social
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" hidden lg:inline col-span-5 lg:-mt-[180px]">
            <div
              style={{
                backgroundImage: "url(" + RightTwo + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" w-[490px] h-[788px]"
            ></div>

            <div className=" mt-[30px]">
              <h1 className="text-white text-[35px] font-prompt">
                ACME Drinks
              </h1>
              <p className=" text-white pr-[40%] text-[18px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                purus services et porttitor quam lectus purus id. Leo.
              </p>
              <hr className=" mt-[24px] w-[90%]" />
              <p className=" text-[#BDBDBD] pr-[40%] text-[18px] font-[400] mt-[20px]">
                Brand, Strategy, Event, Social
              </p>
            </div>
          </div>
        </div>

        {/* three */}
        <div className=" mt-[132px] grid grid-cols-12 gap-x-8">
          {/* left */}
          <div className=" col-span-12 lg:col-span-7">
            <div
              style={{
                backgroundImage: "url(" + LeftThree + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" w-full h-[788px]"
            ></div>

            <div className=" mt-[30px]">
              <h1 className="text-white text-[35px] font-prompt">
                ACME Drinks
              </h1>
              <p className=" text-white  text-[18px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                purus services et porttitor quam lectus purus id. Leo.
              </p>
              <hr className=" mt-[24px] lg:w-[70%]" />
              <p className=" text-[#BDBDBD] lg:pr-[55%] text-[18px] font-[400] mt-[20px]">
                Brand, Strategy, Event, Social
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" hidden lg:flex col-span-5 flex-col justify-end">
            <div
              style={{
                backgroundImage: "url(" + RightThree + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" w-[490px] h-[490px]"
            ></div>

            <div className=" mt-[30px]">
              <h1 className="text-white text-[35px] font-prompt">
                ACME Drinks
              </h1>
              <p className=" text-white pr-[40%] text-[18px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                purus services et porttitor quam lectus purus id. Leo.
              </p>
              <hr className=" mt-[24px] w-[90%]" />
              <p className=" text-[#BDBDBD] pr-[40%] text-[18px] font-[400] mt-[20px]">
                Brand, Strategy, Event, Social
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
