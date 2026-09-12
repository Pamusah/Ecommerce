import React from 'react'
import { getProducts } from '../data/Products'
import { Link } from 'react-router-dom';
import ProductsCard from '../components/ProductsCard';
const Home = () => {

    const products = getProducts();
    
    
  return (
    <div className='page'>
        <div className='hero'></div>
        <div className='home-hero'>
            <h1 className='home-title'>Welcome to ShopHub</h1>
            <p>Discover amazing products at great prices</p>
        </div>
        <div className='container'>
            <h2 className='page-title'>Our Products</h2>
            <div className='product-grid'>
                {products.map((product)=>
                    <div className='product-card'>
                        <ProductsCard product={product} key={product.id}/>
                    </div>
                    
                )}
            </div>
        </div>
    </div>
  )
}

export default Home
