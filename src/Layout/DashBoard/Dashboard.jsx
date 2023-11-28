import { NavLink, Outlet } from "react-router-dom";
import { RiSurveyFill } from "react-icons/ri";
import { FaHome, FaChartPie, FaQq } from "react-icons/fa";
import { FaChartLine, FaQ } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu">
                    <li><NavLink to='/dashboard/charts'> <RiSurveyFill />My Survey</NavLink></li>
                    <li><NavLink to='/dashboard/userHome'> <FaQ></FaQ>FAQ</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/create'> <FaChartPie />Create Survey</NavLink></li>
                    <li><NavLink to='/dashboard/explore'> <FaChartLine />Complete Survey</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;