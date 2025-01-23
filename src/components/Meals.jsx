import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";

function Meals() {
	const [loadedMealsState, setLoadedMealsState] = useState([]);

	useEffect(() => {
		async function fetchMeals() {
			const response = await fetch("http://localhost:3000/meals");
			if (!response.ok) {
				//...
			}
			const meals = await response.json();
			setLoadedMealsState(meals);
		}
		fetchMeals();
	}, []);

	return (
		<ul id='meals'>
			{loadedMealsState.map((meal) => (
				<MealItem meal={meal} key={meal.id} />
			))}
		</ul>
	);
}

export default Meals;
