import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { getUsers } from '../utils/api'
import placeholderPic from '../img/placeholder-pic.jpg'
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

  //   static propTypes = {
  //     prop: PropTypes
  //   }

  componentDidMount() {
    this.updateSorting(this.state.activeOption)
  }

  updateSorting = activeOption => {
    this.setState({
      activeOption
    })

    getUsers(this.state.activeOption).then(users =>
      this.setState({
        users
      })
    )
  }

  render() {
    const { users } = this.state

    return (
      <React.StrictMode>
        <ModeProvider value={this.state}>
          <div className={this.state.theme}>
            <Nav />
            <CardGrid />
          </div>
        </ModeProvider>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
