import { Link } from "react-router-dom";

const SurveyPage = ({ item }) => {
    const { _id, image, title, category, description, questionOne, questionTwo,
        questionThree, voted } = item;
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>category: {category}</p>
                    <p>voted: {voted}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/checkout/${_id}`}>
                       <button className="btn btn-primary">Complete Now!</button>
                       </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SurveyPage;