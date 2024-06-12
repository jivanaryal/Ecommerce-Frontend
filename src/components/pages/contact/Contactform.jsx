const Contactform = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4">
        <form action="" className="gap-3">
          <div className="flex gap-3 justify-evenly">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="your name*"
                className=" p-2 outline-none bg-gray-100 rounded-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="your email*"
                className="p-2 outline-none bg-gray-100 rounded-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="your phone*"
                className="p-2 outline-none bg-gray-100 rounded-sm"
              />
            </div>
          </div>
          <div className="my-5">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full  outline-none bg-gray-100 px-2"
              placeholder="Your message*"
            ></textarea>
          </div>

          <div className="flex justify-between ">
            <div></div>
            <div>
              <div className="w-fit h-fit px-4  py-2 rounded-sm bg-mainColor text-white text-xs cursor-pointer">
                <button>Send message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
