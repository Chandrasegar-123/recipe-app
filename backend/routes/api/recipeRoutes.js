import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/recipe', function(req, res, next) {
    // Make an HTTP GET request to the external API using axios
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
            // Send the response from the external API back to the client
            res.json(response.data);
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
        });
});

router.get('/meals', function(req, res, next) {
    const { search } = req.body;
    console.log(search);
    axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${search}`)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    });
});

export default router;
