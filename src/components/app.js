import React, {useState} from 'react';
import Header from './header';
import Shop from './shop';

function App() {
    
  const [count, setCount] = useState(1);
  const [calculation, setCalculation] = useState();

  const [cartItem, setCartItem] = useState([]);
      
  
  return (
    <>
    <Header cartItem={cartItem}
            setCartItem={setCartItem}/>,

    <Shop   count={count} 
            setCount={setCount} 
            calculation={calculation} 
            setCalculation={setCalculation}
            cartItem={cartItem}
            setCartItem={setCartItem}/>
    </>
  )
}

export default App