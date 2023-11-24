import { RiAccountPinCircleFill, RiSurveyLine } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { MdIncompleteCircle } from "react-icons/md";
import { FaUserCheck, FaUsers } from "react-icons/fa";
import AOS from 'aos';
AOS.init();
const HowItWorks = () => {
    return (
        <div className="mb-20" >
            <h3 className="md:text-5xl my-10 text-center font-bold">How It Works</h3>
            <div  className="grid lg:grid-cols-3 md:grid-cols-2 text-center gap-10 mx-auto">
                <div data-aos="fade-up"
     data-aos-duration="3000" className="rounded-lg text-center w-60 border-4 border-sky-500">
                    <div>
                        < RiAccountPinCircleFill className="h-20 w-20 text-center ml-20 my-5" />
                    </div>
                    <h1 className="text-xl font-semibold mb-5">Create an Account</h1>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="rounded-lg text-center w-60 border-4 border-sky-500">
                    <RiSurveyLine className="h-20 w-20 text-center ml-20 my-5" />
                    <h1 className="text-xl font-semibold">
                        Browse Available <br /> Surveys
                    </h1>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="rounded-lg text-center w-60 border-4 border-sky-500">
                    <TiTickOutline className="h-20 w-20 text-center ml-20 my-5" />
                    <h1 className="text-xl font-semibold">
                        Choose a Survey
                    </h1>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="rounded-lg text-center w-60 border-4 border-sky-500">
                    <h1 className="text-xl font-semibold">
                        <MdIncompleteCircle className="h-20 w-20 text-center ml-20 my-5" />
                        Complete the Survey
                    </h1>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="rounded-lg text-center w-60 border-4 border-sky-500">
                    <h1 className="text-xl font-semibold">
                        <FaUserCheck className="h-20 w-20 text-center ml-20 my-5" />
                        Be A Pro User
                    </h1>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="rounded-lg text-center w-60 border-4 border-sky-500">
                    <h1 className="text-xl font-semibold">
                        <FaUsers className="h-20 w-20 text-center ml-20 my-5" />
                        Get Involved in Community
                    </h1>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;