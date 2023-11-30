import { useLoaderData } from "react-router-dom";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
const CheckOut = () => {
    const survey = useLoaderData();
    const { title,  image, category,
       
        description,
        questionOne,
        questionTwo,
        questionThree } = survey;


        const {user} = useContext(AuthContext);

        const [countLike, setCountLike] = useState(0)
        const [countDisLike, setCountDisLike] = useState(0)

        const handleReport =() => {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to Report this content?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Report it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Reported!",
                    text: "This content has been reported.",
                    icon: "success"
                  });
                }
              });
        }


        const handleSurvey = event => {
            event.preventDefault();

            const form = event.target;
            const questionOne = form.one.value;
            const questionTwo = form.two.value;
            const questionThree = form.three.value;
            const survey = {
                surveyQuestion: questionOne,
                questionTwo,
                questionThree
            }
            console.log(survey);
            fetch('https://surver-site-server.vercel.app/completed', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(survey)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Survey Completed Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      document.getElementById("myButton").disabled = true;
                   }
            })
           
          
        }

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
                                    <form onSubmit={handleSurvey} className="card-body">
                                        <div className="form-control my-5">
                                            <label className="label">
                                                <span className="label-text font-semibold text-xl">{questionOne}</span>
                                            </label>
                                            <select name="one" >
                                                <option value="good">Good</option>
                                                <option value="better">Better</option>
                                                {/* <option value="Best">Best</option> */}
                                            
                                            </select>
                                        </div>
                                        <div className="form-control my-5">
                                            <label className="label">
                                                <span className="label-text font-semibold text-xl">{questionTwo}</span>
                                            </label>
                                            <select name="two" >
                                                <option value="good">Good</option>
                                                <option value="better">Better</option>
                                                {/* <option value="Best">Best</option> */}
                                            
                                            </select>
                                        </div>
                                        <div className="form-control my-5">
                                            <label className="label">
                                                <span className="label-text font-semibold text-xl">{questionThree}</span>
                                            </label>
                                            <select name="three" >
                                                <option value="good">Good</option>
                                                <option value="better">Better</option>
                                                {/* <option value="Best">Best</option> */}
                                            
                                            </select>
                                        </div>
                                       
                                        <div className="form-control mt-6">
                                            <button id='myButton' className="btn bg-blue-500 text-white"> Submit</button>
                                           {/* {
                                            data.insertedId ? <button className="btn disabled">Already  submitted</button> :  <button className="btn btn-primary">Submit</button>
                                           } */}
                                        </div>
                                    </form>
                                    <button onClick={handleReport} className="btn bg-red-500 text-white">Report This Content</button>
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