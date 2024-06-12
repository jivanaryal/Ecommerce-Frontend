import aboutus from "../../../assets/images/aboutus.jpg";
const OurStory = () => {
  return (
    <div className="flex justify-center items-center pt-5 gap-5">
      <div className="w-[40%] flex flex-col gap-4">
        <div className="text-4xl font-extrabold py-5">Our story</div>
        <div className="w-[80%]">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </div>
        <div className="w-[80%]">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </div>
      </div>
      <div className="w-[40%]">
        <img src={aboutus} className="" />
      </div>
    </div>
  );
};

export default OurStory;
