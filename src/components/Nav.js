import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ModeConsumer } from '../context/mode'
import CardGrid from './CardGrid'

export default class Nav extends Component {
  state = {
    activeOption: 'DISTANCE'
  }

  handleClick = (e, option) => {
    e.preventDefault()
    this.setState({ activeOption: option })
  }

  render() {
    return (
      <ModeConsumer>
        {({ mode, toggleMode }) => (
          <Fragment>
            <header className={`bg-${mode}`}>
              <nav>
                <div className="container flex">
                  <ul>
                    <li>
                      <a
                        className={
                          this.state.activeOption === 'DISTANCE'
                            ? `grad active ${mode}`
                            : `grad ${mode}`
                        }
                        onClick={e => this.handleClick(e, 'DISTANCE')}
                      >
                        distance
                      </a>
                    </li>
                    <li>
                      <a
                        className={
                          this.state.activeOption === 'ACTIVITY'
                            ? `grad active ${mode}`
                            : `grad ${mode}`
                        }
                        onClick={e => this.handleClick(e, 'ACTIVITY')}
                      >
                        activity
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
            <CardGrid option={this.state.activeOption} />
          </Fragment>
        )}
      </ModeConsumer>
    )
  }
}
