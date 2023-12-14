import banner from "../../assets/1254.jpg";
import pdf from "../../../public/scic-assign.pdf";

import { HiArrowDownTray } from "react-icons/hi2";
const Banner = () => {
  return (
    <div className="md:flex justify-between gap-8 bg-yellow-200  items-center p-10">
      <div className="space-y-6">
        <h1 className=" text-3xl">Hi, I Am </h1>
        <h2 className="text-7xl font-bold">Rejuwan Islam,</h2>
        <p className="text-lg font-semibold">
          {" "}
          A Junior Web Developer with 6 month commercial experience successful
          websites..
        </p>
       <a download={true} href={pdf}>
       <button  className="btn mt-4 btn-outline text-lg">
          <HiArrowDownTray /> Download Resume
        </button>
       </a>
      </div>
      <div className="bg-black md:mt-0 mt-4 rounded-full p-2">
        <img className="rounded-full  rounded-b-full " src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
