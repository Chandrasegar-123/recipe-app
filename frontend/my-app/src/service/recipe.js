import axios from 'axios';

const baseUrl = 'http://localhost:8080'; // Replace with your backend URL

const recipeService = async () => {
  try {
    const response = await axios.get(`${baseUrl}/recipe`);
    const data = response.data; // Assuming the response contains an array of categories

    // Return the fetched recipe categories
    // console.log(categories);
    return data;
  } catch (err) {
    console.error('Error fetching recipe categories:', err);
    // Handle errors gracefully (e.g., display error message to user)
    throw err; // Re-throw the error for potential error handling in the calling component
  }
};

export default recipeService;
