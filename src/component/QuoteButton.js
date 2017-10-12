import React from 'react';

const QuoteButton = ({getQuote}) => {
  return (
    <div>
      <button type='button' onClick={getQuote}>New Quote</button>
    </div>
  );
};

export default QuoteButton;
