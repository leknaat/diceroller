import React, { Component } from 'react'
import _ from 'lodash'

export default class DiceRoller extends Component {

  constructor(){
    super()
    this.state = { diceResults: [], modifier: 1 }
  }

  randomNumber(sides) {
    return _.random(1, sides)
  }

  diceValue(){
    this.setState({diceResults: [...this.state.diceResults, (this.randomNumber(this.props.sides)) + this.state.modifier]})
  }

  rolls() {
    return _.map(this.state.diceResults, (results) => {
      return (<li>{results}</li>)
    })
  }

  modifyBy() {
    const modifier = [1, 2, 3, 4, 5]
    const currentIndex = modifier.indexOf(this.state.modifier)
    const addedIndex = currentIndex + 1
    const index = addedIndex >= modifier.length ? 0 : addedIndex
    this.setState({ modifier: modifier[index] })
  }


  render() {
    return (
      <div>
          <button onClick={() => this.diceValue()}>Roll a d{this.props.sides}</button>
          <p>Modifier: {this.state.modifier}<button onClick={() => this.modifyBy()}>Modifier</button></p>
          <ul>
            {this.rolls()}
          </ul>
      </div>
    )
  }
}
