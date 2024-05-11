import express from 'express';
import { PORT,mongoDBURL } from './configs/config.js';
import mongoose from 'mongoose';
import axios from 'axios';
import router from './routes/api/recipeRoutes.js';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
}   );


app.get('api/recipes/:category', async(req, res) => {
    const { category } = req.params.category;

    try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const recipes = response.data.meals;
        res.json({recipes});
    } catch (error) {
        console.error('Error fetching recipes: ',error);
        res.status(500).json({message: 'Error fetching recipes'});
    }
}
);





mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
    