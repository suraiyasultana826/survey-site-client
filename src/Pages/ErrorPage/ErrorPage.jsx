import { Link } from 'react-router-dom';
import error from '../../../src/assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='text-center w-3/4 mx-auto m-10 relative'>
            <img src={error} alt="" />
            <Link to='/'><button className='btn text-white bg-blue-600 absolute left-96 bottom-24'>Go To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;