import { useState } from 'react';
import './App.css';
import Menu from './Components/Menu';

function App() {

  const [color, changeColor] = useState('white')

  return (
    <div className="app-div" style={{backgroundColor:color  }}>
      <h1 className="app-heading" >Background Color Changer Application</h1>
      <Menu changeColor={changeColor}/>
    </div>
  )

}

export default App
