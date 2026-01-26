import React from 'react'
import Item from './Item';
import LargeItem from './LargeItem';

function Product() {
  return (
    <div>
    <div className='flex md:hidden'>
      <Item/>
    </div>
    <div className='hidden md:flex'>
      <LargeItem/>
    </div>
    </div>
  )
}

export default Product;
