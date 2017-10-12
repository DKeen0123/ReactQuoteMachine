import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './component/QuoteBox';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {quote: []};
    this.getQuote();
  }

getQuote(){
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?",
    dataType: "json",
    data: "method=getQuote&format=json&lang=en",
    success: (quote) => {
      this.setState({quote});
    }

  });
}

  render() {
    return (
      <div>
      <QuoteBox quote={this.state.quote}/>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".container"));
