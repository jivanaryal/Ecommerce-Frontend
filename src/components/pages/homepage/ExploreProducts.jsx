import phone from "../../../assets/images/samsung.jpg";
import laptop from "../../../assets/images/laptop-png-6778.png";
import airpod from "../../../assets/images/airpod.png";
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useRef } from "react";
const ExploreProducts = () => {
  const ref = useRef(null);
  const handleScroll = (offset) => {
    if (ref.current) {
      ref.current.scrollLeft += offset;
    }
  };

  const sellingContent = [
    {
      name: "Airpods pro",
      newprice: "$100",
      oldprice: "$110",
      image: airpod,
    },
    {
      name: "Samsung s23 ultra",
      newprice: "$1900",
      oldprice: "$2100",
      image: phone,
    },
    {
      name: "Samsung s23 ultra",
      newprice: "$1900",
      oldprice: "$2100",
      image: phone,
    },
    {
      name: "Dell Laptop",
      newprice: "$1000",
      oldprice: "$1100",
      image: laptop,
    },
    {
      name: "Samsung s23 ultra",
      newprice: "$1900",
      oldprice: "$2100",
      image: phone,
    },
    {
      name: "Airpods pro",
      newprice: "$100",
      oldprice: "$110",
      image: airpod,
    },
    {
      name: "Airpods pro",
      newprice: "$100",
      oldprice: "$110",
      image: airpod,
    },

    {
      name: "Dell Laptop",
      newprice: "$1000",
      oldprice: "$1100",
      image: laptop,
    },
    {
      name: "Airpods pro",
      newprice: "$100",
      oldprice: "$110",
      image: airpod,
    },
  ];
  return (
    <div className="bg-white pb-10 pt-5 mt-10 ">
      <div className="flex gap-2 items-center cursor-pointer">
        <div className="bg-mainColor h-5 w-2 rounded-sm "></div>
        <div className="text-mainColor text-sm">Our products</div>
      </div>
      <div className="flex justify-between items-center mx-4 ">
        <div className="text-2xl text-mainColor">Explore Our Products</div>

        <div className=" px-3 py-1 rounded-md flex gap-3 text-xl">
          <div
            className={`bg-thirdColor cursor-pointer p-1 rounded-md`}
            onClick={() => {
              handleScroll(-250);
            }}
          >
            <FaArrowLeft />
          </div>
          <div
            className="bg-thirdColor cursor-pointer p-1 rounded-md"
            onClick={() => {
              handleScroll(250);
            }}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div
        className="flex gap-7 mt-5 w-[100%] overflow-x-scroll scrollHide  scroll-smooth "
        ref={ref}
      >
        {sellingContent.map((val, i) => {
          return (
            <div className="flex cursor-pointer" key={i}>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  {/* The image section and its icons relatively */}
                  <div className="bg-thirdColor rounded-sm md:h-[250px] h-[120px]  md:w-[230px] w-[120px] flex justify-center items-center relative ">
                    <div className="flex">
                      <img src={val.image} className="mx-auto  md:h-36" />
                    </div>
                    <div className="flex flex-col gap-4 absolute right-3 top-5">
                      <div className="p-1 bg-white rounded-full">
                        <CiHeart />
                      </div>
                      <div className="p-1 bg-white rounded-full">
                        <FaRegEye />
                      </div>
                    </div>
                  </div>
                </div>
                {/* The title section */}
                <div className="flex flex-col gap-2 ">
                  <div>{val.name}</div>
                  <div className="flex gap-3">
                    <div className="text-red-600">{val.newprice}</div>
                    <div className="line-through text-thirdColor">
                      {val.oldprice}
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="flex text-orange-500 items-center">
                      <div>
                        <MdOutlineStarPurple500 />
                      </div>
                      <div>
                        <MdOutlineStarPurple500 />
                      </div>
                      <div>
                        <MdOutlineStarPurple500 />
                      </div>
                      <div>
                        <MdOutlineStarPurple500 />
                      </div>
                      <div className="text-gray-300">
                        <MdOutlineStarPurple500 />
                      </div>
                      <div className="text-thirdColor">(65)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreProducts;
