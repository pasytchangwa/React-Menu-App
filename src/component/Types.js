import React from 'react'

const Types = ({categories, handleClick}) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
         <button type='button' className='filter-btn' key={index} onClick={() => handleClick(category)}>
          {category}
         </button>
        );
      })}
    </div>
 );
};

export default Types