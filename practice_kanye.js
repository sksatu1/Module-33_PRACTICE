const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote.quote;
}