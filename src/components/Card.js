import React, { Component } from 'react'
import { ModeConsumer } from '../context/mode'
import TimeAgo from 'react-timeago'
import { FaCertificate } from 'react-icons/fa'
import placeholderPic from '../img/placeholder-pic.jpg'

export default function Card(props) {
  const {
    id,
    location,
    name,
    online_status,
    personal,
    picture,
    sexual
  } = props.user
  return (
    <ModeConsumer>
      {({ mode, toggleMode }) => (
        <div className={`card bg-${mode}`}>
          {picture ? (
            <img src={picture.url} alt={`Picture of ${name}`} />
          ) : (
            <img src={placeholderPic} alt="No picture available." />
          )}

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
            <span>Test</span>
          </div>
        </div>
      )}
    </ModeConsumer>
  )
}
