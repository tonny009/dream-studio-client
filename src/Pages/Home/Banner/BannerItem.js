import React from 'react';
import './banner.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full  rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/3">
                <h1 className='text-5xl font-bold text-white'>
                    We are here to make<br />
                    your life <br />
                    memorable with exclusive clicks!
                </h1>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;