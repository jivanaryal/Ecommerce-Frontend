import React from "react";
import { CiMail } from "react-icons/ci";
const Writetous = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="h-fit w-fit p-2 bg-mainColor rounded-full">
          {<CiMail className="text-white font-extrabold text-lg" />}
        </div>
        <div>Write to us</div>
      </div>

      <div className="flex flex-col text-xs  gap-2">
        <div>
          <div>Fill out our form and we will contact</div>
          <div> you within 24 hours.</div>
        </div>
        <div>Emails:customer@exclusive.com</div>
        <div>Emails:support@exclusive.com</div>
      </div>
    </div>
  );
};

export default Writetous;
