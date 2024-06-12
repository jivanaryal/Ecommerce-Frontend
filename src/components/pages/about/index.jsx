import OurStory from "./OurStory";
import Information from "./Information";
import OurTeams from "./OurTeams";
import OurServices from "./OurServices";

const index = () => {
  return (
    <div className="flex flex-col gap-10">
      <OurStory />
      <Information />
      <OurTeams />
      <OurServices />
    </div>
  );
};

export default index;
