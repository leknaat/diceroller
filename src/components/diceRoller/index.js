import React, { Component } from 'react'
import Multiplyer from './multiplyer.js'
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
          <p>{this.state.number}</p>
          <button onClick={() => this.diceValue()}>Roll me!</button>
          <Multiplyer />
      </div>
    )
  }
}
