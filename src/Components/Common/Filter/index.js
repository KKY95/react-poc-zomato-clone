import React from "react";
import "./filter.css"
import FilterItem from "./FilterItem";

function Filter(props){
    return (
        <div className="filters">
            {props.filterList && props.filterList.map((filter)=>{
                return <FilterItem filter={filter} key={filter.id}/>
            })}
        </div>
    );
}

export default Filter;