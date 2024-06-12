import Calltous from "./Calltous";
import Writetous from "./Writetous";
import Contactform from "./Contactform";

const index = () => {
  return (
    <div className="flex mt-10 justify-around items-baseline gap-10">
      <div className="flex flex-col">
        <Calltous />
        <Writetous />
      </div>
      <div>
        <Contactform />
      </div>
    </div>
  );
};

export default index;
