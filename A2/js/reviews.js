const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews-container');

// Generate review cards
function generateReviewCards() {
    reviewsContainer.innerHTML = ''; // Clear existing cards

    reviewData.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = review.name;

        const dateElement = document.createElement('p');
        dateElement.textContent = review.date;

        const ratingElement = document.createElement('div');
        ratingElement.classList.add('rating');
        ratingElement.textContent = '★ '.repeat(review.rating) + '☆ '.repeat(5 - review.rating);

        const textElement = document.createElement('p');
        textElement.textContent = review.text;

        reviewCard.appendChild(nameElement);
        reviewCard.appendChild(dateElement);
        reviewCard.appendChild(ratingElement);
        reviewCard.appendChild(textElement);

        reviewsContainer.appendChild(reviewCard);
    });
}

reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get values from the form elements
    const name = document.getElementById('name').value;
    const rating = parseInt(document.getElementById('rating').value);
    const text = document.getElementById('review').value;

    // Current system date
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    console.log(formattedDate);

    // Create a new review object
    const newReview = {
        name: name,
        date: formattedDate,
        rating: rating,
        text: text,
    };

    // Push the new object to the array
    reviewData.push(newReview);

    // Clear and re-generate the review cards
    generateReviewCards();

    // Reset the form
    reviewForm.reset();
});

// Initial generation
generateReviewCards();
