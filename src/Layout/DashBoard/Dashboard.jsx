import { NavLink, Outlet } from "react-router-dom";
import { RiSurveyFill } from "react-icons/ri";
import {  FaChartPie, FaHome, FaUsers} from "react-icons/fa";
import { FaChartLine, FaQ } from "react-icons/fa6";

const Dashboard = () => {
    //todo: get isadmin value from yhe database
    const isAdmin = true;
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu">
                   {
                    isAdmin ? <>
                    <li><NavLink to='/dashboard'><FaHome></FaHome>Admin Home</NavLink>
                    </li>
                     <li><NavLink to='/dashboard/charts'> <RiSurveyFill />Admin Survey</NavLink></li>
                    <li><NavLink to='/dashboard/create'> <FaChartPie />Create Survey</NavLink></li>
                    <li><NavLink to='/dashboard/users'> <FaUsers></FaUsers>All Users</NavLink></li>
                    </>
                    :
                    <>
                     <li><NavLink to='/dashboard/charts'> <RiSurveyFill />My Survey</NavLink></li>
                    <li><NavLink to='/dashboard/userHome'> <FaQ></FaQ>FAQ</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/create'> <FaChartPie />Create Survey</NavLink></li>
                    <li><NavLink to='/dashboard/explore'> <FaChartLine />Complete Survey</NavLink></li>
                    </>
                   }
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
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