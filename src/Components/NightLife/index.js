import React from "react";
import "./nightLife.css"
import Collection from "../Common/collection";
import Filter from "../Common/Filter";
import ExploreSection from "../Delivery/exploreSection";
import {nightLiferesturants} from "../../data/nightLifeResturants"

const collectionList = [
    {
        id: "1",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/3/801203/d16978262651135bfbe62bdab2689394_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "2",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/8/19313558/5decf9a0b97fcaeb780ae149caf8732b_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "3",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/0/800520/24223997ee6f1ec9edaa24ef635d178e_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "4",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/chains/3/801693/767aa3f776cd94b978227523eac17d59_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "5",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/0/18591570/ed86cb700645db272a227c626375f46d_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "6",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/5/19007115/ae63641d3b82bde465ae277b40e878cf_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "7",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/2/800922/801fe2e23d14e68784d09ce265c33ff2_featured_v2.jpg",
        places: "12 Places"
    },
    {
        id: "8",
        title: "trending this week",
        cover: "https://b.zmtcdn.com/data/pictures/6/800326/706511a3a11379bbf9d208cb2bae6aef_featured_v2.jpg",
        places: "12 Places"
    },
];

const nightFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id: 2,
        icon: <i class="fi fi-rr-sort-alt absolute-center"></i>,
        title: "Distance"
    },
    {
        id: 3,
        title: "Rating 4.0+"
    },
    {
        id: 4,
        title: "Pubs & Bars"
    }
];

function NightLife(){
    return(
        <div>
           <div>
                <Collection list={collectionList} />
            </div>
            <div>
                <div className="max-width">
                    <Filter filterList={nightFilters} />
                </div>
                <ExploreSection list={nightLiferesturants} collectionName="Nightlife Restaurants in Gomti Nagar"/>
            </div>
        </div>
    );
}

export default NightLife;