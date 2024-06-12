import profile from "../../../assets/images/profile.jpeg";
const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="pt-32 pb-40 bg-white w-10/12 mx-auto ">
        <h1 className="text-3xl text-mainColor ml-6 pb-10">
          What our customers say about us
        </h1>
        <div className="grid grid-cols-2 justify-center  place-items-center">
          <div className="h-48 w-11/12  px-10 py-4 border-2 rounded-2xl bg-[#A9AABC]">
            <div className="flex gap-4 items-center">
              <div className="photo">
                <img src={profile} alt="" className="w-12 h-12 rounded-full" />
              </div>
              <div className="name_title flex flex-col text-base">
                <div className="name ">John Doe</div>
                <div className="title font-bold ">CEO,ITSNP</div>
              </div>
            </div>
            <div className="description text-sm pt-2">
              Techmart has been a game-changer for me. Their wide range of
              electronic products and excellent customer service have made my
              shopping experience a breeze.
            </div>
          </div>
          <div className="h-48 w-11/12   px-10 py-4 border-2 rounded-2xl bg-[#F1E9E9]">
            <div className="flex gap-4 items-center">
              <div className="photo">
                <img src={profile} alt="" className="w-12 h-12 rounded-full" />
              </div>
              <div className="name_title flex flex-col text-base">
                <div className="name ">John Doe</div>
                <div className="title font-bold ">CEO,ITSNP</div>
              </div>
            </div>
            <div className="description text-sm pt-2">
              Techmart has been a game-changer for me. Their wide range of
              electronic products and excellent customer service have made my
              shopping experience a breeze.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
