import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const survey = useLoaderData();
    const { title, _id, image, category,
        voted,
        description,
        questionOne,
        questionTwo,
        questionThree } = survey;
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