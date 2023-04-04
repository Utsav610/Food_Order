import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React,{useState} from "react";
import CartProvider from "./store/CartProvider";
function App() {

  const [cartIsshow,setcartIsshow]=useState(false);
  const showCartHandler=()=>{
    setcartIsshow(true);
  }
  const hideCartHandler=()=>{
    setcartIsshow(false);
  }

  return (
    <CartProvider>
     {cartIsshow && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
