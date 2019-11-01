import React, { Component, createRef } from 'react'
import { createPortal } from 'react-dom'

export default class Modal extends Component {
  elRef = createRef()

  componentDidMount = () => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(this.elRef.current)
  }

  componentWillUnmount = () => {
    const modalRoot = document.getElementById('modal')
    modalRoot.removeChild(this.elRef.current)
  }

  render() {
    if (!this.elRef.current) {
      const div = document.createElement('div')
      this.elRef.current = div
    }

    const { children } = this.props
    return createPortal(<div> {children} </div>, this.elRef.current)
  }
}
