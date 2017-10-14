import React from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter';


const TwitterButton = (props) => {
  return (
    <div className="button">
      <a className="twitter--button" href='#' onClick={props.createTweet}><FaTwitter /></a>
    </div>
  );
};

export default TwitterButton;
