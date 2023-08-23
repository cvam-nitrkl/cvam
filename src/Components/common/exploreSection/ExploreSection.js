import React from 'react'
import "./exploreSection.css"
import ExploreCard from './exploreCard/ExploreCard'


const ExploreSection = ({list, collectionName}) => {

    // console.log(list[0].info.res)
  return (
    <>
        <div className='max-width explore-section'>
            <div className='collection-title'>{collectionName}</div>
            <div className='explore-grid'>
                {list.map((restaurant) => {
                   return <ExploreCard restaurant={restaurant} />
                })}
            </div>
        </div>
    </>
  )
}

export default ExploreSection