import React, {useState, useEffect} from 'react';
import './cart.css';
import avatar from '../images/icon-delete.svg';


function Cart({cartItem, setCartItem}){

    const [cartStatus, setCartStatus] = useState(false)
   
    const deleteItem=(cartItemIndex)=>{
        const newCart= cartItem.filter(index => index !== cartItemIndex)
        setCartItem(newCart)
    }

   const checkCart = () => {
      if (cartItem.length === 0) {
            return (
                  <div className="empty-cart">
                  Your cart is empty.
                  </div>
            )
      } else {
        return (
            cartItem.map((item, index) => ( 
                <div className="item" key={index}>
                    <img src= {item.thumbnail} alt="" className="thumbnail-img" />
                    <div className="item-body">
                        <div className="product-title">{item.name}</div>
                        <div className="purchase-details"> 
                            ${item.amount}  x  {item.count} &nbsp; <strong>${item.calculation}</strong>
                        </div>
                    </div>
                    <div className="delete" onClick={()=>deleteItem(item)}>
                        <img src={avatar} alt="" />
                    </div>
                </div> 
            )
        ) 
        )
      }
   }

    useEffect(()=>{
        cartItem.length === 0 ? setCartStatus(false) : setCartStatus(true)
    }, [cartItem])

    return(
        <>
            <div className='cart-input'>
                <div className="cart-header">
                        <strong>Cart</strong>
                        <hr></hr>
                </div>
                <div className="cart-items">
                  {checkCart()}
                </div>
                {cartStatus && <div className="checkout-btn-container">
                    <button className='checkout-btn'>Checkout</button>
                </div>}
            </div>
        </>
    )
}

export default Cart;