
const SurveyPage = ({ item }) => {
    const { id, image, title, category, description, questionOne, questionTwo,
        questionThree, voted } = item;
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>category: {category}</p>
                    <p>voted: {voted}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Complete Now!</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SurveyPage;