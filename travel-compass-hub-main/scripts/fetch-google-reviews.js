import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This script fetches Google Reviews via the Places API and saves them to a static JSON file.
// Run this periodically (e.g., via a cron job or manual execution before deployment)
// Command: node scripts/fetch-google-reviews.js

const PLACE_ID = 'ChIJCC7YUmvHozoRCyH4UmtH3z4'; // Replace with actual Rudraksh Safar Place ID
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const OUTPUT_FILE = path.join(__dirname, '../src/data/reviews.json');

async function fetchReviews() {
    if (!API_KEY) {
        console.error('ERROR: GOOGLE_PLACES_API_KEY environment variable is not set.');
        console.log('Skipping live review fetch. Using existing static data.');
        process.exit(0);
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.status !== 'OK') {
            throw new Error(`Google API Error: ${data.status} - ${data.error_message}`);
        }

        const result = data.result;

        // Transform to our simple format
        const reviewsData = {
            rating: result.rating,
            totalReviews: result.user_ratings_total,
            reviews: result.reviews.map((r) => ({
                authorName: r.author_name,
                rating: r.rating,
                text: r.text,
                time: r.relative_time_description,
                profilePhotoUrl: r.profile_photo_url
            }))
        };

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(reviewsData, null, 2), 'utf-8');
        console.log(`✅ Successfully updated reviews.json with ${reviewsData.reviews.length} reviews. Average Rating: ${reviewsData.rating}`);

    } catch (error) {
        console.error('Failed to fetch reviews:', error);
    }
}

fetchReviews();
