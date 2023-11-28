import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import AuthProvider from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn} = useContext(AuthProvider);
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            // toast.success('Successfully Logged In!')
            navigate(location?.state ? location.state : '/');
        })
       
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="p-8">
        <div className="divider"></div> 
       <div>
           <button onClick={handleGoogleSignIn} className="btn bg-fuchsia-400 m-6 "><FaGoogle className="mr-4"></FaGoogle>
           Google
           </button>
       </div>
       
   </div>
    );
};

export default SocialLogin;