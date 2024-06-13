import { MdOutlineSecurity, MdOutlineStarPurple500 } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { SiCashapp } from "react-icons/si";
import { TbBrandDaysCounter } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

const RatingData = [
  {
    title: "positive seller Ratings",
    number: "82%",
  },
  {
    title: "ship on time",
    number: "100%",
  },
  {
    title: "chat response Rate",
    number: "100%",
  },
];

const SingleItem = () => {
  const location = useLocation();
  const [price, setPrice] = useState(location.state.newprice);
  const [index, setIndex] = useState(1);

  console.log(location.state.image);
  return (
    <div className="bg-gray-300 font-sans">
      <div className=" py-10">
        <div className=" px-4 bg-white  w-10/12 mx-auto grid  lg:grid-cols-12 md:grid-cols-9 grid-cols-3 border-2">
          <div className="left lg:col-span-4 md:col-span-4 col-span-full  pt-5">
            <img
              src={location.state.image}
              alt=""
              className="max-w-[300px] md:w-[250px] w-[400px]"
            />
          </div>
          <div className="middle lg:col-span-5 md:col-span-5 col-span-full pt-5">
            <div className="title text-2xl pb-3">{location.state.name}</div>
            <div className="flex pb-2">
              <div className="star">
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
              <div className="number text-mainColor">135 Ratings</div>
            </div>
            <div className="brand">
              <div className="brand text-sm">
                Brand :<span className="text-mainColor">No Brand</span>
                <span className="pl-2 w-1">|</span>
                <span className="text-mainColor p-2">
                  More Mobile Accessories from No Brand
                </span>
              </div>
            </div>
            <hr className=" my-6 " />
            <div className="price text-2xl text-orange-500 pb-10">{price}</div>
            <div className="flex gap-5 items-center pb-4">
              <div className="text-gray-500">Quantity</div>
              <div>
                <FiMinus
                  onClick={() => {
                    if (index > 1 && price > location.state.newprice) {
                      setIndex(index - 1);
                      setPrice(price / 2);
                    } else {
                      setIndex(1);
                      setPrice(location.state.newprice);
                    }
                  }}
                />
              </div>
              <div>{index}</div>
              <div>
                <CiSquarePlus
                  className="text-4xl"
                  onClick={() => {
                    console.log(price);
                    setPrice(price * 2);
                    setIndex(index + 1);
                  }}
                />
              </div>
            </div>
            <div className="buttons">
              <button className="buy w-5/12 mr-4 bg-[#26ABD4] text-white py-3  rounded-sm">
                Buy Now
              </button>
              <button className="buy w-5/12 bg-[#F85606] text-white py-3  rounded-sm ">
                Add to Cart
              </button>
            </div>
          </div>
          <div className=" flex flex-col  gap-2 pt-8 px-2 lg:col-span-3 col-span-full bg-[#FAFAFA] shadow-sm text-black">
            <p>Delivery</p>
            <div className="flex gap-4 items-center">
              <div className="logo">
                <IoLocationOutline className="text-xl" />
              </div>
              <div className="name text-[13px] mr-4 font-sans line-clamp-3">
                <p>Bagmati,Kathmandu Metro</p>
                <p>22-Newroad Area, Newroad</p>
              </div>
              <button className="text-mainColor text-base">Change</button>
            </div>
            <hr />
            <div className="flex items-center justify-between gap-2 text-[13px] ">
              <div className="flex items-center gap-3">
                <div className="text-xl">
                  <IoLocationOutline />
                </div>
                <div className="name   text-[14px]">
                  <p>
                    Free Delivery <span>3 Mar -</span> <span>4 Mar</span>
                  </p>
                  <p>3-4 day(s)</p>
                </div>
              </div>
              <button className="text-mainColor mb-8 text-base">Change</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="logo">
                <SiCashapp />
              </div>
              <p>
                {" "}
                Cash and delivery Available from <span>EBox</span>
              </p>
            </div>
            <hr className="my-5" />
            <p>Services</p>
            <div className="flex items-center gap-3">
              <div className="logo">
                <TbBrandDaysCounter />
              </div>
              <p>
                {" "}
                Cash and delivery Available from <span>EBox</span>
              </p>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div className="logo">
                <MdOutlineSecurity />
              </div>
              <p>
                {" "}
                Cash and delivery Available from <span>EBox</span>
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p>Sold by</p>
                <h2>Ebox</h2>
              </div>
              <div className="flex">
                <div>logo</div>
                <p>chat</p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3">
              {RatingData.map((val, i) => {
                return (
                  <div key={i} className="border-r-2 border-b-2 p-4">
                    <div className="text-xs text-gray-500">{val.title}</div>
                    <div>{val.number}</div>
                  </div>
                );
              })}
            </div>
            <div className="text-center  text-base py-3 text-mainColor">
              visit store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
