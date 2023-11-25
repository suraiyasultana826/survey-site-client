import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SurveyPage from "../SurveyPage/SurveyPage";

const Explore = () => {
    const [survey, setSurvey] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/surveys')
        .then( res => res.json())
        .then(data => {
            // const categorySurvey = data.filter(item => item.category === 'Business');
            // setSurvey(categorySurvey)
            setSurvey(data);
        })
    },[])
    return (
        <div>
             <Helmet>
                <title>Survey Site | Explore</title>
            </Helmet>
            <h2>Choose A Survey</h2>

            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
                {
                    survey.map(item =>  <SurveyPage key={item.id}
                    item={item}></SurveyPage>)
                }
            </div>
            
        </div>
    );
};

export default Explore;