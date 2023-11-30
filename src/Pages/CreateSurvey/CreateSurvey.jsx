import Swal from "sweetalert2";

const CreateSurvey = () => {
    const handleCreateSurvey = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const url = form.url.value;
        const category = form.category.value;
        const description = form.description.value;
        const questionOne = form.questionOne.value;
        const questionTwo = form.questionTwo.value;
        const questionThree = form.questionThree.value;


        const survey = {
            surveyQuestion: questionOne,
            questionTwo,
            questionThree,
            title, description,
            url, category
                }
        console.log(survey);
        fetch('https://surver-site-server.vercel.app/surveys', {
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
                    title: "Survey Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 
               }
        })
       
      
    }
    return (
        <div className="card shrink-0 w-full  bg-base-100 text-center">
                    <form onSubmit={handleCreateSurvey}  className="card-body">
                    <h1 className="text-5xl font-bold">Create A Survey</h1>
                      <div className="grid grid-cols-2 gap-10">
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text"  placeholder="title" className="input input-bordered" name="title" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="category"  placeholder="category" className="input input-bordered" name="category" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url"  placeholder="Photo URL" className="input input-bordered" name="url"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text"  placeholder="description" className="input input-bordered" name="description" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Question</span>
                            </label>
                            <input type="text"  placeholder="write first question here" className="input input-bordered" name="questionOne" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Second Question</span>
                            </label>
                            <input type="text"  placeholder="write second question here" className="input input-bordered" name="questionTwo" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Third Question</span>
                            </label>
                            <input type="text"  placeholder="write third question here" className="input input-bordered" name="questionThree" />
                            
                        </div>
                        
                      </div>
                      
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create Survey</button>
                        </div>
                    </form>
                </div>
    );
};

export default CreateSurvey;