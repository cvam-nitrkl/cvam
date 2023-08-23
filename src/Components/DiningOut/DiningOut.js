import React from 'react'
import "./diningOut.css"
import Filters from '../common/filters/Filters'
import Collection from '../common/collection/Collection'
import { diningOut } from '../data/diningOut';
import ExploreSection from '../common/exploreSection/ExploreSection';



const collectionList = [
  {
    id:"1",
    title: "12 Places For Onam Celebrations",
    cover: "https://b.zmtcdn.com/data/collections/a70d7021ee58db56864d1edd46d838c8_1692342843.png",
    places:"12 Places"
  },
  {
    id:"2",
    title: "23 Serene Rooftop Places",
    cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places:"24 Places"
  },
  {
    id:"3",
    title: "11 Newly Opened Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places:"6 Places"
  },
  {
    id:"4",
    title: "10 Trending Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places:"9 Places"
  },
  {
    id:"5",
    title: "13 Romantic Dining Places",
    cover: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places:"14 Places"
  },
  {
    id:"6",
    title: "Winners of Zomato Restaurant Awards",
    cover: "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places:"17 Places"
  },
  {
    id:"7",
    title: "22 Finest Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places:"20 Places"
  },
  {
    id:"8",
    title: "11 Must-visit Legendary Places",
    cover: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120193.jpg",
    places:"11 Places"
  },
  // {
  //   id:"9",
  //   title: "",
  //   cover: "",
  //   places:""
  // },
  // {
  //   id:"10",
  //   title: "",
  //   cover: "",
  //   places:""
  // },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: "Filters"
  },
  {
    id: 2,
    icon: <i class="fi fi-rs-crown"></i>,
    title: "Great Offers"
  },
  {
    id: 3,
    title: "Rating 4.0+"
  },
  {
    id: 4,
    title: "Outdoor Seating"
  },
  {
    id: 5,
    title: "Serves Alcohol"
  },
  {
    id: 6,
    title: "Open Now",
    icon: <i className="fi fi-rr-sort-alt"></i>
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList = {diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName="Trending dining restaurants in BTM" />
    </>
  )
}

export default DiningOut