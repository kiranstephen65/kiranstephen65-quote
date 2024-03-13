# Quote Utils

This module provides utilities for fetching random quotes and manipulating strings.

## Installation

You can install this module via npm: `npm install quote-utils`


## Usage

### Fetching Random Quote

```javascript
const { fetchRandomQuote } = require('quote-utils');

fetchRandomQuote().then((quote) => {
  console.log('Random Quote:', quote);
}).catch((error) => {
  console.error('Error:', error.message);
});


