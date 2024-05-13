import express from 'express';
import connectDB, { PORT } from './configs/config.js';
import recipe from './routes/api/recipeRoutes.js';
import user from './routes/api/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
}   );


app.use('/',recipe);
app.use('/user', user);


connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






