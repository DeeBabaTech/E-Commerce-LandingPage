import React, { useState} from 'react'
import avatar from '../images/image-avatar.png';
import './header.css';
import Cart from './cart';

function Header({cartItem, setCartItem}) {
      const value = false
      
      const [cartPresence, setCartPresence] = useState(value);
      const cartCount = cartItem.length

      const [click, setClick] =useState(value);

      const handleClick = () => {
        setClick(!click)
      }

      const showCart = () => {
          setCartPresence(!cartPresence)
      };

      return (
        <>
          <nav className="header" >
            
            <div className='home'>
              <div className='option' onClick={handleClick}>
                <i className='fas fa-bars' /> 
              </div>
              <div> <a href="index.js"> sneakers </a></div>
            </div> 
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
              <div className='option2' onClick={handleClick}>
                <i className='fas fa-times' /> 
              </div>
              <li className='nav-item'>Collections</li> 
              <li className='nav-item'>Men</li>
              <li className='nav-item'>Women</li>
              <li className='nav-item'>About</li>
              <li className='nav-item'>Contact</li>
            </ul>

            <img className="avatar" src={avatar} alt="avatar" />
            <div className='show-cart' onClick={showCart}>
              <svg className= "cart" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>
              <div className='cart-count'>{cartCount}</div>
            </div>

          </nav>
          <hr className='hr-1'/>
            {cartPresence ?  
                  <Cart setCartItem={setCartItem} 
                  cartItem={cartItem}/> 
                : ""}
        </>
      );
}

export default Header;
