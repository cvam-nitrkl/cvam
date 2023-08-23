import React from 'react'
import "./delivery.css"
import Filters from '../common/filters/Filters'
import DeliveryCollection from './deliveryCollections/DeliveryCollection';
import TopBrands from './topBrands/TopBrands';
import { restaurants } from '../data/restaurants';
import ExploreSection from '../common/exploreSection/ExploreSection';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
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
    title: "Delivery Time",
    icon: <i className="fi fi-rr-sort-alt"></i>
  },
  {
    id: 6,
    title: "Great Offers"
  },
];

const restaurantsList = restaurants ;

const Delivery = () => {
  return (
    <>
      <div className='max-width'>
      <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection list={restaurantsList} collectionName = "Delivery Restaurants in Bangalore" />
    </>
  )
}

export default Delivery