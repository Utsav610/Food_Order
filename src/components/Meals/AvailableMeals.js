import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItems from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Jalebi-Fafda",
    description: "Early Morning Snacks !",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Bhadthu",
    description: "Authentic Gujarati Dish",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Kadhi-Khichdi",
    description: "Lite weight Dinner",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Salaad",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItems>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
