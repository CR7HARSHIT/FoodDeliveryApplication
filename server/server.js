import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`; // Use BASE_URL from .env or default to localhost

// CORS headers middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Proxy endpoint
app.get('/proxy', async (req, res) => {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    try {
        const response = await fetch(decodeURIComponent(targetUrl), {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'application/json'
            }
        });

        // Check for response status and handle non-200 responses
        if (!response.ok) {
            const errorText = await response.text(); // Get the response body as text
            return res.status(response.status).json({ error: 'Failed to fetch data from target URL', details: errorText });
        }

        const contentType = response.headers.get('content-type');
        let data;

        // Check if the response is JSON
        if (contentType && contentType.includes('application/json')) {
            data = await response.json(); // Parse JSON
        } else {
            return res.status(500).json({ error: 'Received non-JSON response', details: await response.text() });
        }

        res.json(data); // Send back the parsed data
    } catch (error) {
        console.error("Error fetching data from target URL:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running on ${BASE_URL}`);
});
