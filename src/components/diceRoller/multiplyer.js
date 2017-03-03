import React, { Component } from 'react'

export class default Multiplyer extends Component {

  constructor(){
    super()
    const numbers = [0, 1, 2, 3, 4, 5]
    this.state = {number: 0}
  }

  componentWillMount() {
    this.setState({ name: this.props.numbers[0] })
  }

  nextNumber() {
    const currentIndex = this.props.numbers.indexOf(this.state.numbers)
    const addedIndex = currentIndex + 1
    const index = addedIndex >= this.props.names.length ? 0 : addedIndex
    this.setState({ numbers: this.props.numbers[index] })
  }


  render(){

  }
}
