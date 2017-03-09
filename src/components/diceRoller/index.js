import React, { Component } from 'react'
import _ from 'lodash'

export default class DiceRoller extends Component {

  constructor(){
    super()
    this.state = { diceResult: null, multiply: 1 }
  }

  randomNumber(sides) {
    return _.random(1, sides)
  }

  diceValue(){
    console.log(this.randomNumber(this.props.sides))
    this.setState({diceResult: this.randomNumber(this.props.sides)})
  }

  multiplyBy() {
    const multiplier = [1, 2, 3, 4, 5]
    const currentIndex = multiplier.indexOf(this.state.multiply)
    const addedIndex = currentIndex + 1
    const index = addedIndex >= multiplier.length ? 0 : addedIndex
    this.setState({ multiply: multiplier[index] })
  }


  render() {
    return (
      <div>
          <button onClick={() => this.diceValue()}>Roll me!</button>
          <p>Multiplier: {this.state.multiply}<button onClick={() => this.multiplyBy()}>Multiplier</button></p>
          <ul>
            <li>{this.state.diceResult * this.state.multiply}</li>
          </ul>
      </div>
    )
  }
}
