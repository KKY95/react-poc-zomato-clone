import React from "react";
import Slider from "react-slick";
import "./topBrands.css"
import NextArrow from "../../Common/Crasousel/nextArrow";
import PrevArrow from "../../Common/Crasousel/prevArrow";


const brandItems = [
    {
        id: 1,
        title: "McDonald's",
        time: "39 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp"
    },
    {
        id: 2,
        title: "Manish Eating Point",
        time: "10 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/bf3a000fa1554839d5e1a415bf85d083_1598856266.png?output-format=webp"
    },
    {
        id: 3,
        title: "Domino's Pizza",
        time: "18 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png?output-format=webp"
    },
    {
        id: 4,
        title: "Pizza Hut",
        time: "55 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
    },
    {
        id: 5,
        title: "Aryan Family's Delight",
        time: "32 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png?output-format=webp"
    },
    {
        id: 6,
        title: "La Pino'z Pizza",
        time: "21 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp"
    },
    {
        id: 7,
        title: "KFC",
        time: "15 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp"
    },
    {
        id: 8,
        title: "Royal Cafe",
        time: "41 min",
        cover: "	https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp"
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

function TopBrands() {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">Top Brands For You</div>
            <Slider {...settings}>
                {brandItems.map((item) => {
                    // return <TopBrandItem item={item}/>
                    return <div>
                        <div className='topBrand-cover'>
                            <img src={item.cover} className='topBrand-image' alt={item.title} />
                        </div>
                        <div className='topBrand-title'>{item.title}</div>
                        <div className='topBrand-time'>{item.time}</div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default TopBrands;