import { useLoaderData } from "react-router-dom";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useState } from "react";
const CheckOut = () => {
    const survey = useLoaderData();
    const { title, _id, image, category,
        voted,
        description,
        questionOne,
        questionTwo,
        questionThree } = survey;

        const [countLike, setCountLike] = useState(0)
        const [countDisLike, setCountDisLike] = useState(0)

    return (
        <div>
            <div className="text-center">
                <p className="font-bold md:text-4xl my-5 ">{title}</p>
                <p className="font-bold md:text-2xl my-5">Category: {category}</p>
                <p className="font-semibold text-xl  mx-auto">Description: {description}</p>
            </div>
            <div className="hero  min-h-screen ">

                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <img src={image} className="max-w-sm rounded-lg " />
                    <input type="text" name="comment" placeholder="Write a comment" className="input input-bordered w-full max-w-xs my-5" />
                    <button className="btn bg-blue-600 text-white">Post</button>
                   <div>
                   <button onClick={() => setCountLike((countLike) => countLike + 1)} className="btn mx-5">
                    {
                        (countLike > 0 && (countDisLike === 0 ) )  ? <AiFillLike className="w-10 h-10 " />  : <AiOutlineLike className="w-10 h-10 "  />
                    }
                   </button>
                   <button onClick={() => setCountDisLike((countDisLike) => countDisLike + 1)} className="btn"> 
                   {
                        (countDisLike > 0 && (countLike === 0 || countLike > 0 )) ? <AiFillDislike className="w-10 h-10" /> : <AiTwotoneDislike className="w-10 h-10" />
                    } </button>
                   </div>
                    </div>
                   
                  
                    <div>
                        <div className="hero min-h-screen ">
                            <div className="hero-content flex-col lg:flex-row-reverse">

                                <div className="card shrink-0 w-full max-w-sm  ">
                                    <form className="card-body">
                                        <div className="form-control my-5">
                                            <label className="label">
                                                <span className="label-text">{questionOne}</span>
                                            </label>
                                            <select name="one" id="one">
                                                <option value="good">Good</option>
                                                <option value="better">Better</option>
                                                <option value="Best">Best</option>
                                            
                                            </select>
                                        </div>
                                        <div className="form-control my-5">
                                            <label className="label">
                                                <span className="label-text">{questionTwo}</span>
                                            </label>
                                            <select name="one" id="one">
                                                <option value="good">Good</option>
                                                <option value="better">Better</option>
                                                <option value="Best">Best</option>
                                            
                                            </select>
                                        </div>
                                        <div className="form-control my-5">
                                            <label className="label">
                                                <span className="label-text">{questionThree}</span>
                                            </label>
                                            <select name="one" id="one">
                                                <option value="good">Good</option>
                                                <option value="better">Better</option>
                                                <option value="Best">Best</option>
                                            
                                            </select>
                                        </div>
                                       
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                    <button className="btn">Report This Content</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;