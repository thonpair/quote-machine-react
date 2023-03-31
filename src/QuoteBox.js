import './QuoteBox.css';
import quotes from './data/quotes.json';
import React from 'react';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "", author: "" }
        this.newQuote = this.newQuote.bind(this);
        this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {
        this.newQuote();
    }

    newQuote() {
        let rand = Math.floor(Math.random() * quotes.length);
        this.setState({ text: quotes[rand].quote });
        this.setState({ author: quotes[rand].author });
    }
    getQuote(e) {
        e.preventDefault();
        this.newQuote();
    }
    render() {

        return (
            <div id="quote-box">
                <div id="text">{this.state.text}</div>
                <div id="author">{this.state.author}</div>
                <div className='buttons'>
                <button id="new-quote" onClick={this.getQuote}>New Quote</button>
                <a href="https://twitter.com/intent/tweet" id="tweet-quote">tweet this quote</a>
                </div>
            </div>
        );
    }
}

export default QuoteBox;