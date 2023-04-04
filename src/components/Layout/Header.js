import React from "react";
import classes from './Header.module.css'
import mealImage from '../../assets/meals.jpg';
import HeaderCart from "./HeaderCart";

const Header=(props)=>{
    return(
        <>
            <header className={classes.header}>
                <h1>Jogani Meals</h1>
                <HeaderCart onClick={props.onShowCart}></HeaderCart>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="Table with Foods" />
            </div>
        </>
    );
};

export default Header;