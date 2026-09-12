import React from 'react'
import { Link } from 'react-router-dom'
const ProductsCard = ({product}) => {
  return (
    <div>
      <img src={product.image} className='product-card image'/>
                        <div className='product-card-content'>
                            <h3 className='product-card-name'>{product.name}</h3>
                            <p className='product-card-price'>${product.price}</p>
                               <div className='product-card-actions'>
                                <Link className='btn btn-secondary'>View Details</Link>
                                <button className='btn btn-primary'>Add To Cart</button>
                                </div>                     
                        </div>
    </div>
  )
}

export default ProductsCard
