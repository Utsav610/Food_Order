import React, { useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
  const [btnIsHighlighted, setbtnHighlighted] = useState(false);
  const cartctx = useContext(CartContext);
  const { items } = cartctx;
  
  const numberOfCartItem = items.reduce((curNumber, item) => {
    // console.log(curNumber);
    // console.log(item);
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartctx.items.length === 0) {
      return;
    }
    setbtnHighlighted(true);

    const timer=setTimeout(()=>{
      setbtnHighlighted(false);
    },300);

    return()=>{
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCart;
