// import React from "react";
// import { useReducer } from "react";
// import CartContext from "./cart-context";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD_ITEM") {
//     const updatedItem = state.items.concat(action.item);
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );

//     const existingCartItem = state.items[existingCartItemIndex];

//     let updatedItems;
//     console.log(existingCartItem,"updated");
//     if (existingCartItem) {
     
//       const upItems = {
//         ...existingCartItem,
//         amount: existingCartItem.amount + action.item.amount,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = upItems;
//     } else {
//       updatedItems = state.items.concat(action.item);
//     }

//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;
//     return {
//       items: updatedItem,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   if (action.type === "REMOVE") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const exitingItem = state.items[existingCartItemIndex];
//     const updatedTotalAmount = state.totalAmount - exitingItem.price;
//     let updatedItems;
//     if(existingCartItemIndex.amount ===1){
//         updatedItems = state.items.filter((item) => item.id!== action.id);
//     }
//     else{
//         const updatedItems={...existingCartItemIndex,amount:existingCartItemIndex.amount-1};
//         updatedItems = [...state.items];
//         updatedItems[existingCartItemIndex] = updatedItem;
//     }
// }
//   return {
//     items:updatedItems,
//     totalAmount: updatedTotalAmount,
//   };
// };

// const CartProvider = (props) => {
//   const [cartstate, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );

//   const addItemsToCartHandler = (item) => {
//     dispatchCartAction({ type: "ADD_ITEM", item: item });
//   };

//   const removeItemsFromCartHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE_ITEM", id: id });
//   };

//   const cartContext = {
//     items: cartstate.items,
//     totalAmount: cartstate.totalAmount,
//     addItem: addItemsToCartHandler,
//     removeItem: removeItemsFromCartHandler,
//   };

//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(existingCartItemIndex);
    const existingCartItem = state.items[existingCartItemIndex];
    console.log(existingCartItem)
    let updatedItems;

    if (existingCartItem) {
      //console.log(existingCartItem);
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      console.log(existingCartItem.amount);
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    console.log(id);
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;