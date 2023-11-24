import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Survey Site | Home</title>
            </Helmet>

           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <Faq></Faq>

        </div>
    );
};

export default Home;