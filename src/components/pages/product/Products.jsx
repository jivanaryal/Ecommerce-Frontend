import laptop from "../../../assets/images/laptop-png-6778.png";
import airpod from "../../../assets/images/airpod.png";
import phone from "../../../assets/images/phone.png";
import { MdDashboard, MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";

export const sellingContent = [
  {
    name: "Airpods pro",
    newprice: 100,

    image: airpod,
  },
  {
    name: "Samsung s23 ultra",
    newprice: 200,

    image: phone,
  },
  {
    name: "Dell Laptop",
    newprice: 300,

    image: phone,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: phone,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: laptop,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: laptop,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: phone,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: laptop,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: phone,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: laptop,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: phone,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: phone,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Samsung s23 ultra",
    newprice: 500,

    image: airpod,
  },
  {
    name: "Dell Laptop",
    newprice: 600,

    image: laptop,
  },
  {
    name: "Airpods pro",
    newprice: 700,

    image: airpod,
  },
  {
    name: "Samsung s23 ultra",
    newprice: 800,

    image: airpod,
  },
  {
    name: "Dell Laptop",
    newprice: 50,

    image: laptop,
  },
  {
    name: "Dell Laptop",
    newprice: 50,

    image: laptop,
  },
  {
    name: "Dell Laptop",
    newprice: 50,

    image: laptop,
  },
  {
    name: "Dell Laptop",
    newprice: 50,

    image: laptop,
  },
];

console.log(sellingContent.length);
26 / 12;

const Products = () => {
  const [filtering, setFiltering] = useState(sellingContent);
  const [half, setHalf] = useState("half");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(12);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(filtering.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //For Getting currentPage
  const indexOfLastPost = currentIndex * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtering.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event) => {
    let newItem;
    if (event.target.value === "high") {
      newItem = [...filtering].sort((p1, p2) => p2.newprice - p1.newprice);
    } else if (event.target.value === "low") {
      newItem = [...filtering].sort((p1, p2) => p1.newprice - p2.newprice);
    } else {
      newItem = sellingContent;
    }
    setFiltering(newItem);
  };

  return (
    <div className="w-10/12 mx-auto pt-10">
      {/* Top Box  */}
      <div className="top flex justify-between items-center">
        <div className="left">
          338 items found for <span className="text-mainColor">"Phone"</span>
        </div>
        <div className="right flex items-center">
          <p>Sort By:</p>
          <select
            className="border-2 py-2 rounded-xl mx-4 w-56 px-2"
            onChange={handleChange}
          >
            <option value="best">Best Match</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <p className="text-sm">View: </p>
          <MdDashboard
            onClick={() => {
              setHalf("half");
            }}
          />
          <AiOutlineMenuUnfold
            onClick={() => {
              setHalf("full");
            }}
          />
        </div>
      </div>
      <hr className="my-5" />

      {/* Products Items  */}
      {half === "half" && (
        <div className="grid grid-cols-4 gap-10 pt-10 items-center">
          {currentPosts.map((val, i) => (
            <div
              key={i}
              className="w-60 h-[340px]  gap-2 flex flex-col items-start boxess "
            >
              <img
                src={val.image}
                alt={val.name}
                className="h-52 w-full py-4"
              />
              <div className="flex flex-col px-4">
                <div>{val.name}</div>
                <div className="flex items-center gap-2">
                  <MdOutlineStarPurple500 className="text-orange-500" />
                  <div>4.6/5</div>
                </div>
                <div className="flex gap-2 py-1">
                  <button className="text-[12px] text-mainColor py-1 border-[1px] w-fit px-1 border-mainColor">
                    free delivery
                  </button>
                  <button className="text-[12px] text-orange-500 py-1 border-[1px] w-fit px-1 border-orange-500">
                    Two Voucher
                  </button>
                </div>
                <div className="text-mainColor">Rs. {val.newprice}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {half === "full" && (
        <div className="flex flex-col gap-6 w-11/12">
          {currentPosts.map((val, i) => (
            <div key={i} className="flex justify-between boxess py-4 ">
              <div className="left flex">
                <img src={val.image} alt="" className="h-52 w-60" />
                <div>
                  <div>{val.name}</div>
                  <div className="flex items-center gap-2">
                    <MdOutlineStarPurple500 className="text-orange-500" />
                    <div>4.6/5</div>
                  </div>
                  <div className="flex gap-1 py-1">
                    <button className="text-xs text-mainColor py-1 border-[1px] w-fit px-2 border-mainColor">
                      free delivery
                    </button>
                    <button className="text-xs text-orange-500 py-1 border-[1px] w-fit px-2 border-orange-500">
                      Two Voucher
                    </button>
                  </div>
                  <div className="info text-gray-600 text-xs flex flex-col gap-2 pt-4">
                    <li>packgage included</li>
                    <li>Made in china</li>
                    <li>Multi-color family,multi pack,professional product</li>
                    <li>charging Type:USB charging</li>
                    <li>No scrating</li>
                  </div>
                </div>
              </div>
              <div className="right pr-10">
                <div className="text-xl text-mainColor">Rs. {val.newprice}</div>
                <strike className="text-gray-400 text-sm">Rs. 1999</strike>
                <p className="text-sm">-56%</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="button flex gap-4 justify-center pt-10">
        {pageNumbers.map((numbers, i) => (
          <div key={i}>
            <button
              className="py-1 px-4 border-mainColor bg-mainColor hover:bg-secondColor text-white"
              onClick={() => {
                setCurrentIndex(numbers);
              }}
            >
              {numbers}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
