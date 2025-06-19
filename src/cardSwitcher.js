import React, { Component } from "react";
import list from "./cardList";

export default class CardSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      cards: list,
    };

    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  handleTouchStart = (e) => {
    this.touchStartX = e.touches[0].clientX;
  };

  handleTouchMove = (e) => {
    this.touchEndX = e.touches[0].clientX;
  };

  handleTouchEnd = () => {
    const diff = this.touchStartX - this.touchEndX;
    if (diff > 100) {
      this.nextCard();
    } else if (diff < -100) {
      this.prevCard();
    }
  };

  nextCard = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.cards.length,
    }));
  };

  prevCard = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + prevState.cards.length) %
        prevState.cards.length,
    }));
  };

  render() {
    const { currentIndex, cards } = this.state;
    const currentCard = cards[currentIndex];
    return (
      <div
        className="main-switcher-section"
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <button className="nav-arrow left button" onMouseUp={this.prevCard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="card-container">
          <div
            className="card"
          >
            <img
              src={currentCard.src}
              alt={currentCard.title}
              className="card-image"
            />
            <h2 className="card-title">{currentCard.title}</h2>
            <p className="card-text">{currentCard.text}</p>
          </div>
        </div>
        <button className="nav-arrow right button" onMouseUp={this.nextCard}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    );
  }
}
