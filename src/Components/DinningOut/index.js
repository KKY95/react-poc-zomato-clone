import React from "react";
import "./dinningOut.css"
import Collection from "../Common/collection";
import { dinningResturants } from "../../data/dinningResturants";
import Filter from "../Common/Filter";
import ExploreSection from "../Delivery/exploreSection";

const collectionList = [
    {
        id: "1",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/3/19131863/49d11fb111b0b0adf60eba53dc26d438_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "2",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/7/19275357/769ef3a47453c9ecfcf51876c3e8b9e7_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "3",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/chains/9/800089/faf5c7cce5683d6043c1ea77f5d1080b_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "4",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/3/20203053/9ac2079c65d3892b6f3ac2f412e3d619_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "5",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/4/18688144/fa44f8474418c6d81968f349d7be9fde_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "6",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/chains/9/19866939/3aa2079d1ded4a354058acf1084c7386_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "7",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/chains/6/19866976/63904e3ac22468d0346af4a43917a55f_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "8",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/2/18801082/0b2000d106a9cfc592895070b20a2266_featured_v2.jpg",
        places: "12 Places"
    },
];

const dinningFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id: 2,
        title: "Rating 4.0+"
    },
    {
        id: 3,
        title: "Outdoor Seating"
    },
    {
        id: 4,
        title: "Serves Alcohol"
    },
    {
        id: 5,
        title: "Open Now"
    }
];

const dinningResturantList = dinningResturants;
function DinningOut() {
    return (
        <div>
            <div>
                <Collection list={collectionList} />
            </div>
            <div>
                <div className="max-width">
                    <Filter filterList={dinningFilters} />
                </div>
                <ExploreSection list={dinningResturantList} collectionName="Best Dining Restaurants near you in Gomti Nagar"/>
            </div>
        </div>
    );
}

export default DinningOut;