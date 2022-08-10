import product_1 from '../images/image-product-1.jpg'
import './shop.css';
import React, {useEffect} from 'react';
import Bottom from './bottom';
import icon_cart from '../images/icon-cart2.svg';
import thumbnail from '../images/image-product-1-thumbnail.jpg';



function Shop({count, setCount, calculation, setCalculation, cartItem, setCartItem}) {

    const product = {
      name: 'Fall Limited Edition Sneakers',
      amount: 125,
      count: count,
      calculation: calculation,
      thumbnail: thumbnail
    }
  
    const populateCart = () => {
     setCartItem([...cartItem, {
           name: product.name,
           amount: product.amount,
           count:product.count,
           thumbnail:product.thumbnail,
           calculation:product.calculation
     }])
    }
    
    useEffect(() => {
        setCalculation(() => count * 125);
      }, [count]);
    
      return (
        <div className="container">
          <div>
            <img src={product_1} className='image' alt="" />
            <div>
              <Bottom />
            </div>
          </div>
          <div className="info">
            <h4> SNEAKER COMPANY </h4>
            <h1> {product.name} </h1> 
            <p className="sub-text">
              These low-profile sneakers are your perfect casual wear companion. Featuring a 
              durable rubber outer sole, they'll withstand everything the weather can offer
            </p>
            <div>
              <p className="price"> ${calculation}.00 <span> 50% </span> </p>
              <p className="slashed-price"> ${calculation * 2}.00  </p> 
              <div className="order">
                <div className='count'>
                  <div className="minus" onClick={() => setCount((c) => (c - 1) > 0 ? (c - 1) : 1  )}>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <div className="zero"> {count} </div>
                  <div className="plus" onClick={() => setCount((c) => c + 1)}>
                    <i className="fa-solid fa-plus sign"></i>
                  </div>
                </div>
                <div className='ca--rt' onClick = {()=>populateCart()}> 
                  <div className='ca---rt'>
                    <img src= {icon_cart} alt='images' />
                  </div>
                  <p>Add to cart</p>
                </div>
              </div>       
            </div>
          </div>
        </div>
    )
}

export default Shop;