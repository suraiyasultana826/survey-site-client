import { useForm } from "react-hook-form";
import signup from '../../../src/assets/signup.jpg'
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";



const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const {createUser} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    return (
       <>
        <Helmet>
                <title>Survey Site | Sign Up</title>
            </Helmet>
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                   
                   <img src={signup} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm  bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" name="name" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" name="email" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20,
                            pattern : /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/ })} placeholder="password" className="input input-bordered" name="password" />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must not be less than  6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password must not be more than 20 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">Password must  be at least one letter, one number and one special character</p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className="mx-auto"><small>Already have an account? <Link to='/login' className="font-bold text-blue-700">Login</Link></small></p>
                </div>
            </div>
        </div>
       </>
    );
};

export default SignUp;