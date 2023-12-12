import SectionTitle from "../SectionTitle/SectionTitle";
import pic1 from "../../assets/html.png";
import pic2 from "../../assets/css.png";
import pic3 from "../../assets/js.png";
import pic4 from "../../assets/react.png";
import pic5 from "../../assets/mongoDb.png";
import pic6 from "../../assets/node js.png";

const MySkill = () => {
    return (
        <div>
            <SectionTitle
            heading={'my skills'}/>

            <div className="grid grid-cols-3 justify-center md:ml-40 ml-8 gap-5 mb-4 items-center">
                <img className="w-20 " src={pic1} alt="" />
                <img className="w-20"  src={pic2} alt="" />
                <img className="w-20"   src={pic3} alt="" />
                <img className="w-20"  src={pic4} alt="" />
                <img className="w-20"  src={pic5} alt="" />
                <img className="w-20"  src={pic6} alt="" />
            </div>
        </div>
    );
};

export default MySkill;