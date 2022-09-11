import React, { useState } from "react";

enum THEABOUT {
  services = "services",
  brands = "brands",
}

const About = () => {
  const [about, setAbout]: any = useState(THEABOUT.brands);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2">
      {/* left */}
      <div>
        <div>
          <p className=" uppercase leading-[60px] text-white font-prompt text-[46px] font-[700] tracking-[0.14em]">
            About Us
          </p>
        </div>
        <div className="mt-[40px] ">
          <p className=" text-white lg:text-[#4F4F4F] pr-12 leading-[30px] text-[22px] font-[400] cursor-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            purus{" "}
            <span
              onClick={() => setAbout(THEABOUT.services)}
              className={`hover:text-white duration-300 ease-in-out cursor-pointer ${
                about == THEABOUT.services ? "text-white" : ""
              }`}
            >
              services
            </span>{" "}
            et porttitor quam lectus purus id. Leo, amet blandit morbi aliquam
            diam pretium imperdiet nisl. Gravida tortor pharetra adipiscing sed.
            Cras cras sed{" "}
            <span
              onClick={() => setAbout(THEABOUT.brands)}
              className={`hover:text-white duration-300 ease-in-out cursor-pointer ${
                about == THEABOUT.brands ? "text-white" : ""
              }`}
            >
              brands
            </span>{" "}
            arcu tellus sed vel neque, nunc. Pharetra gravida elit eu diam.
          </p>
        </div>
      </div>
      {/* right */}
      <div className=" hidden lg:flex items-center justify-end">
        {about == THEABOUT.brands ? (
          <div className=" grid grid-cols-3 gap-y-12 gap-x-10">
            {new Array(12).fill("4").map((el, i) => (
              <div key={i} className=" text-white text-[32px] font-[700]">
                Deloitte.
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <p className=" text-white text-[32px] font-[700] uppercase">
              Corporate Branding
            </p>
            <p className=" text-white text-[32px] font-[700] uppercase">
              Corporate Identity
            </p>
            <p className=" text-white text-[32px] font-[700] uppercase">
              logos
            </p>
            <p className=" text-white text-[32px] font-[700] uppercase">
              ui / ux
            </p>
            <p className=" text-white text-[32px] font-[700] uppercase">
              web development
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
