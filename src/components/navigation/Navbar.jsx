import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
const NavItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "products",
    path: "/category",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "About us",
    path: "/about",
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-secondColor h-16 text-[#fff] fonts ">
      <div className="flex justify-between mx-6  items-center text-lg h-full">
        <div className="left">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-12 rounded-full h-12  animate-bounce hover:animate ease-in-out cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-6 mr-4  ">
            {NavItem.map((val, i) => {
              return (
                <div key={i}>
                  <Link to={val.path}>
                    {" "}
                    <div className="capitalize  hover:text-[#f5e2e2]">
                      {val.name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mr-4 relative ">
            <input
              type="text"
              name="search"
              id="search"
              className="h-8 w-96 rounded-md outline-none text-black px-3 text-xs"
            />
            <CiSearch className="absolute top-2  text-xl text-black right-2" />
          </div>
        </div>
        <div className="flex items-center justify-center relative   gap-10 text-lg">
          <Link to={"/cart"}>
            {" "}
            <IoMdCart className="text-2xl  hover:text-[#f5e2e2] " />{" "}
            <div className=" absolute bottom-5 left-4 h-4 w-4 rounded-full bg-red-500 text-xs text-center">
              3
            </div>
          </Link>
          <div
            className="cursor-pointer  hover:text-[#f5e2e2]"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </div>
          <div
            className="cursor-pointer  hover:text-[#f5e2e2]"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
