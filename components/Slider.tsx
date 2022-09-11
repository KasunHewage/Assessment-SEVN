import Image from "next/image";
import React, { useEffect, useState } from "react";

const images: any = [
  "/images/Slider-01.png",
  "/images/Slider-02.jpg",
  "/images/Slider-03.jpg",
  "/images/Slider-04.jpg",
];

export const Slider = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter === images.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div>
      <div className="grid grid-cols-1 ">
        {images.map((el: any, i: any) => (
          <div
            key={i}
            style={{
              backgroundImage: "url(" + images[i] + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className={`h-[307px]  md:h-[614px] ease-in-out duration-300 text-white ${
              counter == i ? "inline" : "hidden"
            }`}
          >
            <div className=" flex items-end justify-between px-8 pb-6 h-full w-full">
              <div>
                <p className=" font-prompt text-[20px]">
                  0{counter + 1} / 0{images.length}
                </p>
              </div>
              <div className=" md:flex items-end  justify-end space-x-2 hidden">
                {images.map((el: any, i: any) => (
                  <div
                    key={i}
                    style={{
                      backgroundImage: "url(" + images[i] + ")",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={`w-[76px] h-[37px] hover:scale-110 duration-300 ease-in-out `}
                    onClick={() => setCounter(i)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
