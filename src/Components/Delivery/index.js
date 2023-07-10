import React from "react";
import "./delivery.css"
import Filter from "../Common/Filter";
import DeliveryColection from "./DeliveryCollections/DeliveryCollection";
import TopBrands from "./topBrands";
import ExploreSection from "./exploreSection";
import { resturants } from "../../data/resturants";

const deliveryFilters = [
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
        title: "Safe and Hygienic"
    },
    {
        id: 4,
        title: "Pure Veg"
    },
    {
        id: 5,
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
        title: "Delivery Time"
    },
    {
        id: 6,
        title: "Great Offers"
    },

]

const resturantsList=resturants;

function Delivery() {
    return (
        <div>
            <div className="max-width">
                <Filter filterList={deliveryFilters} />
            </div>
            <DeliveryColection />
            <TopBrands/>
            <ExploreSection list={resturantsList} collectionName="Delivery Resturants in Lucknow"/>
        </div>
    );
}

export default Delivery;