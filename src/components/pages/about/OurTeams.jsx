import profile from "../../../assets/images/profile.jpeg";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const OurTeams = () => {
  const Teams = [
    {
      memberProfile: profile,
      name: "John Smith",
      post: "Product Manager",
    },
    {
      memberProfile: profile,
      name: "John Smith",
      post: "Product Manager",
    },
    { memberProfile: profile, name: "John Smith", post: "Product Manager" },
  ];
  return (
    <div className="flex gap-10 mx-[10%]">
      {Teams.map((val, i) => {
        return (
          <div key={i} className="flex flex-col gap-2 h-96 cursor-pointer">
            <div>
              <img src={val.memberProfile} className=" h-80 rounded-sm" />
            </div>
            <div className="flex flex-col gap-0">
              <div className="text-2xl font-medium">{val.name}</div>
              <div className="text-thirdColor">{val.post}</div>
              <div className="flex gap-2 cursor-pointer">
                <div>
                  <CiTwitter className="text-thirdColor" />
                </div>
                <div>
                  <FaInstagram className="text-thirdColor" />
                </div>
                <div>
                  <FaLinkedinIn className="text-thirdColor" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurTeams;
