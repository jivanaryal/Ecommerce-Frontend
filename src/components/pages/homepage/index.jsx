import BestSellingProduct from "./BestSellingProduct";
import Category from "./Category";
import ExploreProducts from "./ExploreProducts";
import Services from "./Services";
import Slider from "./Slider";
import Team from "./Team";
import Testimonials from "./Testimonials";

const index = () => {
  return (
    <div className=" w-[97%] mx-auto">
      {/* This is the index page where we call all the homepage component */}
      <Slider />
      <Category />
      <BestSellingProduct />
      <ExploreProducts />
      <Testimonials />
      <Services />
      <Team />
    </div>
  );
};

export default index;
