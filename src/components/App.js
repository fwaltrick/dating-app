import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ModeProvider } from '../context/mode'
import Nav from './Nav'
import 'babel-polyfill'

export default class App extends Component {
  state = {
    mode: 'dark',
    toggleMode: () => {
      this.setState(({ mode }) => ({
        mode: mode === 'dark' ? 'light' : 'dark'
      }))
    }
  }

  render() {
    const { users } = this.state

    return (
      <React.StrictMode>
        <ModeProvider value={this.state}>
          <Nav />
        </ModeProvider>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
