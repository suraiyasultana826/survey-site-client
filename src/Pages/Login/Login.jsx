import { useContext } from 'react';
import login from '../../assets/login.jpg'
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
const Login = () => {


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Successfully Logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }
    // suraiya@tanu.gmail.com 
    // pass: 123456aA!
    return (
        <>
            <Helmet>
                <title>Survey Site | Login</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img className='1/4' src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm  bg-base-100">

                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='mx-auto'><small>New Here? <Link to='/signup' className='font-bold text-blue-700'> Create an Account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;