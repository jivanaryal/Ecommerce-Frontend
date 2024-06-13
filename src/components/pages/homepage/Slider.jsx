import { useEffect, useState } from "react";
import url4 from "../../../assets/images/iphone.png";

// This is slider page

const slideItem = [url4, url4, url4];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const showNextImage = () => {
    setIndex((index) => {
      if (index === slideItem.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-[1600px] w-full lg:h-[700px] h-[500px] bg-[#000000]   mx-auto my-0">
      <div className="w-10/12 mx-auto h-[650px] py-10 flex overflow-hidden ">
        {slideItem.map((val, i) => {
          return (
            <div key={i} className="flex-none">
              <img
                src={val}
                alt=""
                className="-z-10 slide-image object-cover rounded-xl w-full mx-auto h-4/6 lg:h-full"
                style={{ translate: `${-100 * index}%` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
