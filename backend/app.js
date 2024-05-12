import express from 'express';
import connectDB, { PORT } from './configs/config.js';
import recipe from './routes/api/recipeRoutes.js';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
}   );


app.use('/recipe',recipe);


connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






