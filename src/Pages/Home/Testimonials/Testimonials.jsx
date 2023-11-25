import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
// import Rating from 'react-rating';
// import {Rating} from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-10'>
           
            {/* <Rating style={{maxWidth:180} }
        value={3} readonly/> */}
            <h1 className="text-5xl font-bold text-center">TESTIMONIALS</h1>
            <FaRegUser className='w-20 h-20 text-center mt-20 mx-auto' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='lg:m-24 mt-14 text-center'>
                            <p>{review.details}</p>
                            <h3 className='text-2xl text-blue-600'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;