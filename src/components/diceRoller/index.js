import React, { Component } from 'react'

export default class DiceRoller extends Component {

  constructor(){
    super()
    this.state = { number: 0 }
  }

  randomNumber(){
    const diceSides = [1, 2, 3, 4, 5, 6]
    const pickedSide = this.diceSides[Math.floor(Math.random() * 6)]
    this.setState({number: this.pickedSide})
  }


  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => this.setState({ number: this.randomNumber() })}>Generate</button>
      </div>
    )
  }
}
