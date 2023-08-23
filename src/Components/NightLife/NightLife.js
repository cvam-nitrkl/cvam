import React from 'react'
import "./nightlife.css"
import { nightlife } from '../data/nightlife';
import Filters from '../common/filters/Filters'
import Collection from '../common/collection/Collection'
import ExploreSection from '../common/exploreSection/ExploreSection';

const collectionList = [
  {
    id:"1",
    title: "22 Finest Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places:"20 Places"
  },
  {
    id:"2",
    title: "19 Best Bars & Pubs",
    cover: "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
    places:"20 Places"
  },
];

const nightlifeFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: "Filters"
  },
  {
    id: 2,
    icon: <i class="fi fi-rs-crown"></i>,
    title: "Gold"
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className="fi fi-rr-sort-alt"></i>
  },
  {
    id: 4,
    title: "Rating 4.0+"
  },
  {
    id: 5,
    title: "Pubs & Bars"
  },

];

const nightlifeList = nightlife;

const NightLife = () => {
  return (
    <>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList = {nightlifeFilters} />
      </div>
      <ExploreSection list={nightlifeList} collectionName="Nightlife Restaurants in BTM" />
    </>
  )
}

export default NightLife