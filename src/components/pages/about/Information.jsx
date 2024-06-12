import { AiOutlineShop } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { TbShoppingBag } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
const Information = () => {
  const info = [
    {
      icon: <AiOutlineShop />,
      activenumbers: "10.5k",
      remarks: "seller active day our site",
    },

    {
      icon: <RiMoneyDollarCircleLine />,
      activenumbers: "10.5k",
      remarks: "seller active day our site",
    },
    {
      icon: <TbShoppingBag />,
      activenumbers: "10.5k",
      remarks: "seller active day our site",
    },
    {
      icon: <GiTakeMyMoney />,
      activenumbers: "10.5k",
      remarks: "seller active day our site",
    },
  ];
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex  gap-20 mt-20 my-10 ">
        {info.map((val, i) => {
          return (
            <div
              className="w-56 h-48 border-2 rounded-sm hover:bg-mainColor scale-105 transition-all  delay-75 duration-200 group cursor-pointer"
              key={i}
            >
              <div className="flex flex-col gap-4 justify-evenly items-center h-full text-center  mx-auto">
                <div className="bg-thirdColor w-fit rounded-full p-2 group-hover:bg-[#61bddc]">
                  <div className="bg-black group-hover:bg-white transition-all  delay-75 duration-200 group-hover:text-black w-fit rounded-full text-white p-1 text-4xl">
                    {val.icon}
                  </div>
                </div>
                <div className="text-xl font-bold">{val.activenumbers}</div>
                <div className="text-sm text-gray-600 transition-all  delay-75 duration-200 group-hover:text-white">
                  {val.remarks}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
