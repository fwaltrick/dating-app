import React from 'react'

const ModeContext = React.createContext()

export const ModeConsumer = ModeContext.Consumer
export const ModeProvider = ModeContext.Provider
export default ModeContext
