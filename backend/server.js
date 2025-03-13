const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.GOOGLE_API_KEY; // Load API key from .env
const PLACE_ID = process.env.PLACE_ID; // Google Place ID

app.get("/api/reviews", async (req, res) => {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
        const response = await axios.get(url);

        if (response.data.status !== "OK") {
            return res.status(400).json({ error: "Invalid API response" });
        }

        // Extract and format review data
        const reviews = response?.data?.result?.reviews?.map(review => ({
            author: review.author_name,
            rating: review.rating,
            text: review.text,
            date: new Date(review.time * 1000).toLocaleDateString(),
        }));

        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error.message);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
