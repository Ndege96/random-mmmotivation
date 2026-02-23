// Inspirational Quotes Array
const quotes= [
    "Believe you can and you're halfway there.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay positive. Work hard. Make it happen."
];

// DOM Elements
const quoteText = document.getElementById('quote');
const generateButton = document.getElementById('generateQuote');

// Function to Generate a Random Quote
const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex]}"`;
    quoteText.style.animation = 'fadeIn 0.5s ease-in-out';
};

// Event Listener for Button Click
generateButton.addEventListener('click', generateQuote);
