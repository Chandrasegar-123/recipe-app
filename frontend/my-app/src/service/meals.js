import axios from 'axios';

const baseUrl = 'http://localhost:8080'; // Replace with your backend URL

const mealsService = async (search)=> {
  try {
    console.log(search);
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${search}` );
    const data = response.data; // Assuming the response contains an array of categories

    // Return the fetched recipe categories
    // console.log(categories);
    console.log(data);
    return data;
  } catch (err) {
    console.error('Error fetching recipe categories:', err);
    // Handle errors gracefully (e.g., display error message to user)
    throw err; // Re-throw the error for potential error handling in the calling component
  }
};

export default mealsService;
