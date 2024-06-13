import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
const Column1 = [
  {
    linkname: "Link One",
  },
  {
    linkname: "Link One",
  },
  {
    linkname: "Link One",
  },
  {
    linkname: "Link One",
  },
];
const Column2 = [
  {
    linkname: "Link One",
  },
  {
    linkname: "Link One",
  },
  {
    linkname: "Link One",
  },
  {
    linkname: "Link One",
  },
];

const FollowUs = [
  {
    logo: <FaFacebook />,
    name: "Facebook",
  },
  {
    logo: <FaFacebook />,
    name: "Facebook",
  },
  {
    logo: <FaFacebook />,
    name: "Facebook",
  },
  {
    logo: <FaFacebook />,
    name: "Facebook",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full px-10 bg-secondColor mt-20 text-white font-medium py-7">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="left">
          <div className="rounded-full bg-thirdColor  h-24 w-24">
            <img
              src={logo}
              className="w-24 h-24 rounded-full"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                navigate("/");
              }}
            />
          </div>
          <p className="text-lg py-3">
            Stay up to date on the latest features and releases by joining our
            newsletter.
          </p>
          <div className="w-full py-4">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="your email"
              className="py-3 w-9/12 outline-none"
            />
            <button className="bg-black text-white py-3 px-6">Subscribe</button>
          </div>
          <b>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </b>
        </div>
        <div className="right  grid grid-cols-3">
          <div className="left">
            <div className="font-bold text-lg pb-2">Column One</div>
            {Column1.map((val, i) => {
              return (
                <div key={i} className="p-1">
                  {val.linkname}
                </div>
              );
            })}
          </div>
          <div className="middle">
            <div className="font-bold text-lg pb-2">Column Two</div>
            {Column2.map((val, i) => {
              return (
                <div key={i} className="p-1">
                  {val.linkname}
                </div>
              );
            })}
          </div>
          <div className="right">
            <div className="font-bold text-lg pb-2">Follow Us</div>
            {FollowUs.map((val, i) => {
              return (
                <div key={i} className="flex items-center p-1 gap-2">
                  <div className="text-xl">{val.logo}</div>
                  <div>{val.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-2 border-black">
        <hr className="text-black" />
      </div>
      <div className="flex justify-between text-lg pt-3 ">
        <div className="left">© 2023 TechMart. All rights reserved.</div>
        <div className="flex">
          <p>Teams of Services</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
