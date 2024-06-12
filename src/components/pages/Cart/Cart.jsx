import phone from "../../../assets/images/samsung.jpg";
import phone1 from "../../../assets/images/phone.png";
import laptop from "../../../assets/images/laptop-png-6778.png";
import airpod from "../../../assets/images/airpod.png";
import { MdDelete } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemsData = [
  {
    storeName: "Glam and Glitter",
    offer: "Buy 4 item(s) more enjoy free shopping for Express Delivery option",
    delivery: "Earliest Delivery",
    time: "4 Mar",
    image: airpod,
    name: "M10 Wireless Earbuds Version 5.1 | Digital Display",
    about: "No Brand, Size:free size, Color Family:Maroon",
    newPrice: "Rs. 749",
    oldPrice: "Rs. 2000",
  },
  {
    storeName: "Glam and Glitter",
    offer: "Buy 4 item(s) more enjoy free shopping for Express Delivery option",
    delivery: "Earliest Delivery",
    time: "4 Mar",
    image: phone1,
    name: "M10 Wireless Earbuds Version 5.1 | Digital Display",
    about: "No Brand, Size:free size, Color Family:Maroon",
    newPrice: "Rs. 749",
    oldPrice: "Rs. 2000",
  },
  {
    storeName: "Glam and Glitter",
    offer: "Buy 4 item(s) more enjoy free shopping for Express Delivery option",
    delivery: "Earliest Delivery",
    time: "4 Mar",
    image: phone,
    name: "M10 Wireless Earbuds Version 5.1 | Digital Display",
    about: "No Brand, Size:free size, Color Family:Maroon",
    newPrice: "Rs. 749",
    oldPrice: "Rs. 2000",
  },
  {
    storeName: "Glam and Glitter",
    offer: "Buy 4 item(s) more enjoy free shopping for Express Delivery option",
    delivery: "Earliest Delivery",
    time: "4 Mar",
    image: laptop,
    name: "M10 Wireless Earbuds Version 5.1 | Digital Display",
    about: "No Brand, Size:free size, Color Family:Maroon",
    newPrice: "Rs. 749",
    oldPrice: "Rs. 2000",
  },
];

const Summary = [
  {
    name: "Subtotal (3 items)",
    price: "Rs. 3642",
  },
  {
    name: "shipping fee",
    price: "Rs. 340",
  },
  {
    name: "shipping fee discount",
    price: "-Rs. 136",
  },
];
const Cart = () => {
  const [index, setIndex] = useState(1);
  return (
    <div className="bg-[#F4F4F4]">
      <div className="w-9/12  mx-auto ">
        <div className="grid grid-cols-12 gap-2 py-2">
          <div className="left col-span-8 flex flex-col gap-6">
            {/* first Div  */}
            <div className="flex justify-between px-2 border-2 py-2 text-gray-500 text-sm bg-white">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <div>Select All (3 ITEM(S))</div>
              </div>
              <div className="flex items-center">
                <div className="logo text-xl">
                  <MdDelete />
                </div>
                <p>Delete</p>
              </div>
            </div>

            {/* Second Div  */}

            <div className=" flex flex-col gap-3 bg-white">
              {ItemsData.map((val, i) => {
                return (
                  <div key={i} className="border-2 rounded-md px-2">
                    <div className="upper py-2 flex justify-between items-center">
                      <div className="left flex items-center gap-2">
                        <div>
                          <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                          {" "}
                          <div className="text-sm">{val.storeName}</div>
                          <div className="text-[12px] text-gray-500">
                            {val.offer}
                          </div>
                        </div>
                      </div>
                      <div className="right flex text-xs">
                        <div>{val.delivery}:</div>
                        <div className="font-bold"> {val.time}</div>
                      </div>
                    </div>
                    <hr />
                    <div className="down py-6 flex items-center justify-between px-2">
                      <Link to={`/singleItem`} state={val}>
                        <div className="left flex items-center gap-2">
                          <input type="checkbox" name="" id="" />
                          <img src={val.image} alt="" className="w-12 " />
                          <div>
                            <div className="text-sm">{val.name}</div>
                            <div className="text-[12px] text-gray-400">
                              {val.about}
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="middle">
                        <div>{val.newPrice}</div>
                        <strike>{val.oldPrice}</strike>
                        <div>-43% </div>
                        <div className="flex text-2xl gap-1 items-center">
                          <CiHeart />
                          <MdDelete />
                        </div>
                      </div>
                      <div className="right flex items-center gap-2">
                        <FiMinus
                          onClick={() => {
                            if (index > 1) {
                              setIndex(index - 1);
                            } else {
                              setIndex(1);
                            }
                          }}
                        />
                        <div>{index}</div>
                        <FaPlus
                          onClick={() => {
                            setIndex(index + 1);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right bg-white text-gray-500 text-sm col-span-4 border-2 h-fit px-4 py-2">
            <h1 className="text-base text-black pb-2">Order Summary</h1>
            <div className="flex flex-col gap-3">
              {Summary.map((val, i) => {
                return (
                  <div key={i} className="flex items-center  justify-between">
                    <div>{val.name}</div>
                    <div>{val.price}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex  justify-between py-6">
              <input
                type="text"
                name="code"
                id="code"
                className="border-2 rounded-sm bg-gray-100 w-full mr-2"
              />
              <button
                className="border-2 rounded-sm bg-mainColor
             text-white py-1 px-6"
              >
                APPLY
              </button>
            </div>
            <div className="flex justify-between items-center px-2">
              <div>Total</div>
              <div>Rs 3269</div>
            </div>
            <button className="border-2 bg-mainColor text-white w-full py-2">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
