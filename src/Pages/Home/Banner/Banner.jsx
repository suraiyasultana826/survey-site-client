import banner from '../../../assets/background.jpg'
const Banner = () => {
    return (
        <div className='w-full h-screen mb-20 bg-no-repeat bg-cover  ' style={{ backgroundImage: `url(${banner})` }}>
          <div className='flex justify-center items-center text-center w-3/4 mx-auto content-center lg:pl-96 lg:pt-40'>
          <div>
           <h1 className='md:text-5xl text-white font-bold lg:my-10'>Surveys
                at Your Fingertips!</h1>
                <p className='text-white md:font-semibold md:text-xl lg:my-10'>We help you get one step closer to building your perfect survey. These survey, form, and questionnaire templates are made with well researched survey questions to simplify your work. Choose your free template and get started!</p>
                <button className='btn '>Explore</button>
           </div>
          </div>

        </div>
    );
};

export default Banner;