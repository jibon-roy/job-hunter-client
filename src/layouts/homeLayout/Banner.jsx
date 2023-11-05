import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from './slider';


const Banner = () => {

    const [sliders, setSliders] = useState([])

    useEffect(() => {
        axios('/sliders')
            .then(res => setSliders(res.data))
            .then(err => console.log(err))
    }, [])

    console.log(sliders);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    sliders?.map((slider, key) => <SwiperSlide key={key}><Slider slider={slider}></Slider></SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default Banner;