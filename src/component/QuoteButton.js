import React from 'react';

const QuoteButton = ({getQuote}) => {
  return (
    <div className="quote--button-container">
      <button className="quote--button" type='button' onClick={getQuote}>New Quote</button>
    </div>
  );
};

export default QuoteButton;
