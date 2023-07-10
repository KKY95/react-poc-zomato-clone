import React from "react";
import "./filterItem.css"

function FilterItem(props){
    return (
        <div className="filter-item">
            {props.filter.icon && props.filter.icon}
            <div className="filter-name">{props.filter.title}</div>
        </div>
    );
}

export default FilterItem;