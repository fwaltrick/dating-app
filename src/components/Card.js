import React, { Component, Fragment } from 'react'
import Modal from './Modal'
import { ModeConsumer } from '../context/mode'
import TimeAgo from 'react-timeago'
import {
  FaCertificate,
  FaLocationArrow,
  FaClock,
  FaTimes,
  FaUser,
  FaPepperHot
} from 'react-icons/fa'
import placeholderPic from '../img/placeholder-pic.jpg'

export default class Card extends Component {
  state = { showModal: false }

  handleShowDetails = () => this.setState({ showModal: true })
  handleCloseModal = () => this.setState({ showModal: false })

  render() {
    const {
      headline,
      id,
      last_login,
      location,
      name,
      online_status,
      personal,
      picture,
      sexual
    } = this.props.user

    const bodytype = personal.body_type.toLowerCase()
    const smoker = personal.smoker.toLowerCase()
    const relationship = personal.relationship.toLowerCase()
    const anal = sexual.anal_position.toLowerCase()
    const sm = sexual.sm.toLowerCase()
    const safe = sexual.safer_sex.toLowerCase()

    return (
      <Fragment>
        <ModeConsumer>
          {({ mode, toggleMode }) => (
            <div
              className={`card card-${mode}`}
              onClick={this.handleShowDetails}
            >
              {picture ? (
                <img src={picture.url} alt={`Picture of ${name}`} />
              ) : (
                <img src={placeholderPic} alt="No picture available." />
              )}

              {/* Online Status Icons */}

              {online_status === 'ONLINE' && (
                <FaCertificate className="card-fa" color="#47E25C" size={30} />
              )}
              {online_status === 'DATE' && (
                <FaCertificate className="card-fa" color="#E5166D" size={30} />
              )}
              {online_status === 'OFFLINE' && (
                <FaCertificate className="card-fa" color="#E3E3E3" size={30} />
              )}

              <div className="card-content">
                <span className="card-age">{personal.age}</span>
                <span className="card-name">{name}</span>

                <div className="card-footer">
                  <div className="card-distance">
                    <FaLocationArrow color="#FFFFFF" size={10} />
                    <span> &nbsp;{location.distance}m</span>
                  </div>

                  <div className="card-time">
                    <FaClock color="#FFFFFF" size={12} />
                    <span>
                      &nbsp; <TimeAgo date={last_login} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ModeConsumer>
        {this.state.showModal ? (
          <Modal>
            <div className="modal-view">
              <div className="modal-display">
                <div className="modal-person">
                  {picture ? (
                    <img
                      className="modal-img"
                      src={picture.url}
                      alt={`Picture of ${name}`}
                    />
                  ) : (
                    <img
                      className="modal-img"
                      src={placeholderPic}
                      alt="No picture available."
                    />
                  )}
                  <div className="modal-info">
                    <h3 className="modal-name">{name}</h3>
                    <p className="modal-person-info">
                      {personal.age} years &nbsp;|&nbsp;{location.city}
                    </p>
                  </div>
                </div>
                <div className="modal-content">
                  <h2 className="modal-title">{headline}</h2>

                  <div className="modal-body">
                    <div className="modal-separator">
                      <FaUser color="#9CB8C3" size={22} />
                    </div>
                    <p>
                      <span className="modal-item">height:</span>&nbsp;
                      <span className="modal-answer">
                        {personal.height.cm} cm
                      </span>
                    </p>
                    <p>
                      <span className="modal-item">weight:</span>&nbsp;
                      <span className="modal-answer">
                        {personal.weight.kg} kg
                      </span>
                    </p>

                    <p>
                      <span className="modal-item">body type:</span>&nbsp;
                      <span className="modal-answer">{bodytype}</span>
                    </p>
                    <p>
                      <span className="modal-item">smoker:</span>&nbsp;
                      <span className="modal-answer">{smoker}</span>
                    </p>
                    <p>
                      <span className="modal-item">relationship:</span>&nbsp;
                      <span className="modal-answer">{relationship}</span>
                    </p>
                    <div className="modal-separator">
                      <FaPepperHot color="#9CB8C3" size={22} />
                    </div>
                    <p>
                      <span className="modal-item">anal:</span>&nbsp;
                      <span className="modal-answer">{anal}</span>
                    </p>
                    <p>
                      <span className="modal-item">safe:</span>&nbsp;
                      <span className="modal-answer">{safe}</span>
                    </p>
                    <p>
                      <span className="modal-item">sm:</span>&nbsp;
                      <span className="modal-answer">{sm}</span>
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn-close" onClick={this.handleCloseModal}>
                <FaTimes color="#9CB8C3" size={30} />
              </button>
            </div>
          </Modal>
        ) : null}
      </Fragment>
    )
  }
}
