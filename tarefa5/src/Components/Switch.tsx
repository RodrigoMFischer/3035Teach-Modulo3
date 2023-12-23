import React, { useContext } from 'react'
import {ThemeContext} from '../Contexts/DarkModeContext'


const Switch = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <button className='p-2 rounded-md text-white bg-black dark:text-black dark:bg-white'
      onClick={() => toggleTheme()}
    >
    { darkMode ? 'LIGHT MODE' : 'DARK MODE'}
    </button>
  )
}

export default Switch