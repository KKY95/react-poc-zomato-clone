import React from 'react'
import "./exploreSection.css"
import ExploreCard from './exploreCard';

function ExploreSection(props){
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'>{props.collectionName}</div>
      <div className='explore-grid'>
      {props.list.map((resturant)=>{
        return <ExploreCard resturant={resturant}/>
      })}
      </div>
    </div>
  )
}

export default ExploreSection;
