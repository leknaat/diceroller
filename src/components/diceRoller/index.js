import React, { Component } from 'react'
import _ from 'lodash'

export default class DiceRoller extends Component {

  constructor(){
    super()
    this.state = { diceResult: this.randomNumber(), multiply: 1 }
  }

  randomNumber(){
    return _.random(1, 6)
  }

  diceValue(){
    console.log(this.randomNumber())
    this.setState({diceResult: this.randomNumber()})
  }

  componentWillMount() {
    const multiplier = [1, 2, 3, 4, 5]
    this.setState({ multiply: this.props.multiplier[0] })
  }

  multiplyBy() {
    const currentIndex = this.props.multiplyer.indexOf(this.state.multiply)
    const addedIndex = currentIndex + 1
    const index = addedIndex >= this.props.multiplier.length ? 0 : addedIndex
    this.setState({ multiply: this.props.multiplier[index] })
  }


  render() {
    return (
      <div>
          <button onClick={() => this.diceValue()}>Roll me!</button>
          <button onClick={() => this.multiplyBy()}>Multiplier</button>
          <ul>
            <li>{this.state.diceResult}</li>
          </ul>
      </div>
    )
  }
}
