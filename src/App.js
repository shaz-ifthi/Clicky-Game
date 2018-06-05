import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  state = {
    cards: cards,
    score: 0,
    highestscore: 0,
    clicked: []
  };

  clickCount = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.scoreIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }  else {
      this.resetGame();
    }
  };

  scoreIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.highestscore) {
      this.setState({ highestscore: newScore });
    }
    this.handleShuffle();
    
  };

  resetGame = () => {
    this.setState({
      score: 0,
      highestscore: this.state.highestscore,
      clicked: []
    });
    this.handleShuffle();
    alert(`Game Over! \nscore: ${this.state.score}  \nPlay Again?`);
    this.setState({score: 0});
    return true;
  };

  handleShuffle = () => {
    let shuffledcards = shuffleCards(cards);
    this.setState({ cards: shuffledcards });
  };

  
  render() {
    return (
      <Wrapper>
        
        <Header score={this.state.score} highestscore={this.state.highestscore}>Memory Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App; 



