import React from 'react';
import { blog } from '../../FakeData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blg from './Blg';
const Blog = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },]
    };
    return (
        <section id="blog">
            <div className='container my-5'>
                <h1 className='text-center my-3'>Blog</h1>
                <Slider {...settings}>
                    {blog.map(blg => <Blg blg={blg} />)}
                </Slider>
            </div>
        </section>
    );
};

export default Blog;