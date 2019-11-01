import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getUsers } from '../utils/api'
import { ModeConsumer } from '../context/mode'
import Card from './Card'

export default class CardGrid extends Component {
  state = {
    users: [],
    error: null
  }

  updateGrid = option => {
    getUsers(option)
      .then(users =>
        this.setState({
          users
        })
      )
      .catch(() => {
        console.warn('Error')
        this.setState({
          error: 'It was not possible to get the users list.'
        })
      })
  }

  componentDidMount() {
    this.updateGrid(this.props.option)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.option !== this.props.option) {
      this.updateGrid(this.props.option)
    }
  }

  stillLoading = () => {
    const { users, error } = this.state
    return users === [] && error === null
  }

  render() {
    const { users } = this.state

    return (
      <ModeConsumer>
        {({ mode, toggleMode }) => (
          <div className={`ctn-${mode}`}>
            <div className="container">
              <div className={`card-grid`}>
                {this.stillLoading() && (
                  <h3 style={{ fontWeight: '300' }}>L O A D I N G ...</h3>
                )}
                {users.map(user => {
                  return <Card key={user.id} user={user} />
                })}
              </div>
            </div>
          </div>
        )}
      </ModeConsumer>
    )
  }
}
