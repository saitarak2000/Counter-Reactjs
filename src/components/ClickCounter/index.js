// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  Clicked = () => {
    this.setState(prevState => {
      console.log(`prevstate is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>
        <p>Click the button to increase the count!!</p>
        <button onClick={this.Clicked}>Click Me!</button>
      </div>
    )
  }
}
export default ClickCounter
