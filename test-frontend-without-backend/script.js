const reviewsContainer = document.getElementById("reviews");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let reviews = [
    { author: "Alice Johnson", rating: 5, text: "Amazing service! Highly recommend." },
    { author: "Michael Smith", rating: 4, text: "Great experience, but could be improved." },
    { author: "Sarah Brown", rating: 5, text: "Loved the ambiance and friendly staff!" },
    { author: "David Lee", rating: 3, text: "Good, but expected better quality." },
    { author: "Jessica White", rating: 4, text: "Nice place, will visit again." },
    { author: "Tony", rating: 3, text: "Nice place, will visit again." },
    { author: "White", rating: 4, text: "Nice place, will visit again." }
];

let currentIndex = 0;
let visibleCount = window.innerWidth < 768 ? 2 : 4;

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

// Load reviews on page load
displayReviews();
