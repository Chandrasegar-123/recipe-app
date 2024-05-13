import Header from "../components/header";
import food from "../assets/images/soup.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from "react";
import recipeService from "../service/recipe";
import mealsService from "../service/meals";

function Home() {
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [formData, setFormData] = useState({
        search: ''
    });
    useEffect(() => {
        recipeService().then(res => {
            setCategory(res.categories);
        })
    }, [])
    console.log(category);

    const handleCategoryClick = async (categoryselected) => {
        setSelectedCategory(categoryselected); // Update selected category state
        console.log(categoryselected); // Optional for debugging

        try {
            const meals = await mealsService(categoryselected); // Call mealsService with category as search term
            setMeals(meals.meals); // Assuming response contains an array of meals in "meals" property
            console.log(meals); // Optional for debugging
        } catch (err) {
            console.error('Error fetching meals:', err);
            // Handle errors gracefully (e.g., display error message to user)
        }
    };



    return (
        <div>
            <Header />
            <div className="d-flex justify-content-between w-75 container">
                <div className="d-flex flex-column">
                    <h2>Categories</h2>
                    <div className="d-flex flex-wrap gap-2">
                        {category !== undefined ? (
                            category.map((item, index) => (
                                <button
                                    key={index}
                                    className="btn btn-outline-primary"
                                    onClick={() => handleCategoryClick(item.strCategory)}
                                >{item.strCategory}</button>
                            ))
                        ) : (
                            <p>Loading categories...</p>
                        )}

                    </div>

                    {selectedCategory && (
                        <div className="d-flex flex-column">
                            <h2>Meals for {selectedCategory}</h2>
                            <div className="d-flex flex-wrap gap-4 justify-content-between">
                            {/* Render the fetched meals here (replace with your meal rendering logic) */}
                            {meals.map((meal) => (
                                <div className="d-flex flex-column col-2">
                                    <div>
                                        <img src={meal.strMealThumb} alt="soup" className="w-100 h-auto rounded mb-2" />
                                    </div>
                                    <div className="d-flex felx-column justify-content-between ">
                                        <p>{selectedCategory}</p>
                                        <FontAwesomeIcon className="mt-1 text-danger" icon={faHeartRegular} />
                                    </div>
                                    <h5>{meal.strMeal}</h5>
                                </div> // Assuming meal object has idMeal and strMeal properties
                            ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Home;