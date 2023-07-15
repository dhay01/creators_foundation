import React, { useState, useRef, useEffect } from 'react';
import '../hero/hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Hero({ newsData }) {
    const filteredNewsData = newsData.filter(
        newsItem => newsItem.section.includes('الأخبار')
    );

    const slides = filteredNewsData.map((newsItem, index) => ({
        images: newsItem.images,
        caption: {
            title: newsItem.title,
            content: newsItem.content,
            id: newsItem.id,
        },
    }));

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.autoplay.start();
        }
    }, []);


    return (
        <div className="hero-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                onSwiper={swiper => {
                    sliderRef.current = swiper;
                    setActiveSlide(swiper.activeIndex);
                }}
                onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`carousel-item ${activeSlide === index ? 'active' : ''}`}>
                            {slide.images.map((image, index) => (
                                <img key={index} src={image.path} className="d-block w-100 slide-image" alt={`Slide ${index + 1}`} />
                            ))}
                            <div className="carousel-caption d-none d-md-block">
                                <h5>
                                    <Link to={`/news/${slide.caption.id}`}>{slide.caption.title}</Link>
                                </h5>
                                {/*<p>{slide.caption.content}</p>*/}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero;
