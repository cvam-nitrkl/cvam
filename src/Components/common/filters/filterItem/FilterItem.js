import React from 'react'
import "./filteritem.css";


const FilterItem = ({filter}) => {

  return (
    <div className='filter_item'>
        {filter.icon && filter.icon}
        <div className='filter_name'>{filter.title}</div>
    </div>
  )
}

export default FilterItem