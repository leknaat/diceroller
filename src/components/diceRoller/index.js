import React, { Component } from 'react'
import _ from 'lodash'

export default class DiceRoller extends Component {

  constructor(){
    super()
    this.state = { number: this.randomNumber() }
  }

  randomNumber(){
    return _.random(1, 6)
  }

  diceValue(){
    console.log(this.randomNumber())
    this.setState({number: this.randomNumber()})
  }


  render() {
    return (
      <div>
          <p>Dice 1: {this.state.number}</p>
          <button onClick={() => this.diceValue()}>Generate</button>
      </div>
    )
  }
}
