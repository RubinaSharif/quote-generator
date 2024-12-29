const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = selectedQuote.text;
   document.getElementById('author').innerText = `- ${selectedQuote.author}`;
 }
