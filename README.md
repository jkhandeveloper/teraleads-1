File Structure: 

/project-root

/backend

    server.js           # Node.js Express API to fetch reviews

    .env                # Environment variables for API key & Place ID

/frontend

    index.html          # Carousel UI

    styles.css          # Styles for the carousel

    script.js           # Fetches reviews from backend and updates UI

package.json            # Node.js dependencies

README.md


IMPORTANT NOTE:

    GOOGLE PLACE ID must be enable for GOOGLE API KEY.

    GOOGLE API KEY must be biling enabled. 

    otherwise it will give 400 status invlid response from API.


Backend (Node.js): 

/backend/server.js

The backend is built using Node.js + Express to fetch reviews from Google Places API and return them to the frontend.


Do not expose API keys in frontend code.
The .env file is ignored by Git (.gitignore).

Frontend Implementation: 

index.html - This file contains the carousel structure.
style.css - This file contains the style of index.html file.
script.js - This file contains the login to show carousel to frontend from backend response.
            OR show error if carousel data empty or no response from backend.

How It Works: 

Backend API (server.js)

    Fetches reviews from Google Places API.
    Filters and formats data.
    Returns a JSON response to the frontend.
    Frontend (script.js)

Calls /api/reviews to fetch data.
    Dynamically populates the carousel.
    Implements next/prev navigation.
    Uses media queries to adjust review visibility (4 for desktop, 2 for mobile).


Local Development: 

Backend:
    cd backend
    npm install
    node server.js
    Runs the backend on http://localhost:5000.

Frontend: 
    Open /frontend/index.html in a browser.


-------------------------------------------------------------------

test-frontend without API Call:

    This is demo look of frontend with the built in JSON format data.