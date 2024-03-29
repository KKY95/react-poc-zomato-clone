import React from 'react'
import Slider from 'react-slick';
import "./collection.css"
import NextArrow from '../Crasousel/nextArrow';
import PrevArrow from '../Crasousel/prevArrow';

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

function Collection(props) {
    return (
        <div className='collection-wrapper'>
            <div className='max-width collection'>
                <div className='collection-title'>Collection</div>
                <div className='collection-subtitle-row'>
                    <div className='collection-subtitle-text'>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends
                    </div>
                    <div className='collection-location'>
                        <div>All collections in Lucknow</div>
                        <i class="fi fi-rr-caret-right absolute-center"></i>
                    </div>
                </div>
                <Slider {...settings}>
                    {props.list.map((item) => {
                        return <div>
                            <div className='collection-cover'>
                                <img src={item.cover} className='collection-image' alt={item.title} />
                                <div className='gradient-bg'></div>
                                <div className='collection-card-title'>{item.title}</div>
                                <div className='collection-card-subtitle'>
                                <div>{item.places}</div>
                                <i class="fi fi-rr-caret-right absolute-center"></i>
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Collection
