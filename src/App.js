import React, { Component } from "react"
import "./App.css"

class App extends Component {
    state = {
        numbers: {
            diceOne: 0,
            diceTwo: 0,
            diceThree: 0,
            diceFour: 0,
            diceFive: 0,
            diceSix: 0
        }
    }

    random = () => Math.floor(Math.random() * 6) + 1

    rollDice = () => this.setState({
        numbers: {
            diceOne: this.random(),
            diceTwo: this.random(),
            diceThree: this.random(),
            diceFour: this.random(),
            diceFive: this.random(),
            diceSix: this.random()
        }
    })


    render() {
        return (
            <div>
                <h1>D I C E</h1>
                <div className="box">
                    <h1>{this.state.numbers.diceOne}</h1>
                    <h1>{this.state.numbers.diceTwo}</h1>
                    <h1>{this.state.numbers.diceThree}</h1>
                    <h1>{this.state.numbers.diceFour}</h1>
                    <h1>{this.state.numbers.diceFive}</h1>
                    <h1>{this.state.numbers.diceSix}</h1>
                </div>
                <button className="dice" onClick={this.rollDice}>R O L L</button>

            </div>
        )
    }
}
export default App

