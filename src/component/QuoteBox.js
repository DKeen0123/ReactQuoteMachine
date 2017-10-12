import React from 'react';

const QuoteBox = ({quote}) => {
  if(!quote) {
    return <div>Loading...</div>;
  }
  return (
    <div className="quote-box">
    <q>{quote.quoteText}</q>
    <p>{String.fromCharCode(8213)} {quote.quoteAuthor}</p>
    </div>
  );

};

export default QuoteBox;
