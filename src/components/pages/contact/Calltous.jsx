import { IoCallOutline } from "react-icons/io5";
const Calltous = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-mainColor m-5 text-xl">Contact us</div>
      <div className="flex items-center gap-3">
        <div className="h-fit w-fit p-2 bg-mainColor rounded-full">
          {<IoCallOutline className="text-white font-extrabold text-lg" />}
        </div>
        <div>Call to us</div>
      </div>

      <div className="flex flex-col text-xs gap-3">
        <div>We are availabe 24/7, 7 days a week</div>
        <div>Mobile: 9883487487</div>
      </div>

      <hr className="mt-5 mb-5 w-full" />
    </div>
  );
};

export default Calltous;
