import useHttp from "../hooks/useHTTP";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig = {};

function Meals() {
	const {
		data: loadedMealsState,
		isLoading,
		error,
	} = useHttp("http://localhost:3000/meals", requestConfig, []);

	if (isLoading) {
		return <p className='center'>Fetching meals...</p>;
	}

	if (error) {
		return <Error title='Failed to fetch meals' message={error} />;
	}

	return (
		<ul id='meals'>
			{loadedMealsState.map((meal) => (
				<MealItem meal={meal} key={meal.id} />
			))}
		</ul>
	);
}

export default Meals;
