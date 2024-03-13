// quoteUtils.js
const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetches a random quote from a website.
 * @returns {Promise<string>} A promise that resolves to a random quote.
 */
const fetchRandomQuote = async () => {
  try {
    const response = await axios.get('http://quotes.stormconsultancy.co.uk/random.json');
    return response.data.quote;
  } catch (error) {
    console.error('Error fetching random quote:', error);
    throw new Error('Failed to fetch random quote');
  }
};

/**
 * Counts the number of words in a string.
 * @param {string} text The input text.
 * @returns {number} The number of words.
 */
const countWords = (text) => {
  return text.trim().split(/\s+/).length;
};

module.exports = {
  fetchRandomQuote,
  countWords,
};
