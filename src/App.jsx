import React from 'react'
import Navbar from './Components/Navbar/navbar'

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App