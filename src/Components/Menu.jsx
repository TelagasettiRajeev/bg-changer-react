import React, { useState } from 'react';
import './Menu.css';

const Menu = ( {changeColor} ) => {


  
  return (
    <div className="menu-bar" >
      <div className="menu-item" onClick={()=>{changeColor("red")}} style={{backgroundColor:"red"}} > Red </div>
      <div className="menu-item" onClick={()=>{changeColor("green")}} style={{backgroundColor:"green"}} > Green </div>
      <div className="menu-item" onClick={()=>{changeColor("blue")}} style={{backgroundColor:"blue"}} > Blue </div>
      <div className="menu-item" onClick={()=>{changeColor("yellow")}} style={{backgroundColor:"yellow"}} > Yellow </div>
      <div className="menu-item" onClick={()=>{changeColor("brown")}} style={{backgroundColor:"brown"}} > Brown </div>
      <div className="menu-item" onClick={()=>{changeColor("beige")}} style={{backgroundColor:"beige"}} > Beige </div>
      <div className="menu-item" onClick={()=>{changeColor("grey")}} style={{backgroundColor:"grey"}} > Grey </div>
      <div className="menu-item" onClick={()=>{changeColor("purple")}} style={{backgroundColor:"purple"}} > Purple </div>
      <div className="menu-item" onClick={()=>{changeColor('bisque')}} style={{backgroundColor:"bisque"}} > Reset </div>
    </div>
  )

}

export default Menu;
