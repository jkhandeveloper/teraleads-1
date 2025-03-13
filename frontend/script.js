const reviewsContainer = document.getElementById("reviews");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let reviews = [];
let currentIndex = 0;
let visibleCount = window.innerWidth < 768 ? 2 : 4;

// Fetch reviews from our Node.js backend
async function fetchReviews() {
    try {
        const response = await fetch("http://localhost:5000/api/reviews");
        reviews = await response.json();
        displayReviews();
    } catch (error) {
        console.error("Error fetching reviews:", error);
    }
}

// Display reviews dynamically
function displayReviews() {
    reviewsContainer.innerHTML = "";
    const endIndex = Math.min(currentIndex + visibleCount, reviews.length);

    for (let i = currentIndex; i < endIndex; i++) {
        const review = reviews[i];
        const reviewBox = document.createElement("div");
        reviewBox.classList.add("review-box");
        reviewBox.innerHTML = `
            <h4>${review.author}</h4>
            <p>⭐ ${review.rating}</p>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(reviewBox);
    }
}

// Handle next & previous buttons
nextBtn.addEventListener("click", () => {
    if (currentIndex + visibleCount < reviews.length) {
        currentIndex += visibleCount;
    } else {
        currentIndex = 0;
    }
    displayReviews();
});

prevBtn.addEventListener("click", () => {
    if (currentIndex - visibleCount >= 0) {
        currentIndex -= visibleCount;
    } else {
        currentIndex = reviews.length - visibleCount;
    }
    displayReviews();
});

// Adjust visible count on resize
window.addEventListener("resize", () => {
    visibleCount = window.innerWidth < 768 ? 2 : 4;
    displayReviews();
});

// Fetch and display reviews on load
fetchReviews();
