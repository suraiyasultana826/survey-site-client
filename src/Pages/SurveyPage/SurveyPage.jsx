
const SurveyPage = ({item}) => {
    const {id, image, title, category, description, questionOne, questionTwo,
    questionThree, voted} = item;
    return (
        <div>
            <h2>{title}</h2>
            
        </div>
    );
};

export default SurveyPage;