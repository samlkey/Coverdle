import React, { useEffect } from 'react';
import '../css/keyboard.css' 

export default function Keyboard({HandleInput=async(e : any)=>{}}){
    let valid = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "BACKSPACE", "ENTER"]
    useEffect(() => {
        //window.addEventListener('keyup', keyPressed)
        window.addEventListener('keyup', validateEntry)
    }, []);

    function validateEntry(e : any){
        if(valid.includes(e.key.toUpperCase())) HandleInput(e.key.toUpperCase())
    }
    
    return (
        <div className='keyboard-wrapper'>
        <div className='keyboard'>
          <button className="Q" onClick={() => HandleInput("Q")}>Q</button>
          <button className="W" onClick={() => HandleInput("W")}>W</button>
          <button className="E" onClick={() => HandleInput("E")}>E</button>
          <button className="R" onClick={() => HandleInput("R")}>R</button>
          <button className="T" onClick={() => HandleInput("T")}>T</button>
          <button className="Y" onClick={() => HandleInput("Y")}>Y</button>
          <button className="U" onClick={() => HandleInput("U")}>U</button>
          <button className="I" onClick={() => HandleInput("I")}>I</button>
          <button className="O" onClick={() => HandleInput("O")}>O</button>
          <button className="P" onClick={() => HandleInput("P")}>P</button>
        </div>

        <div className='keyboard'>
          <button className="A" onClick={() => HandleInput("A")}>A</button>
          <button className="S" onClick={() => HandleInput("S")}>S</button>
          <button className="D" onClick={() => HandleInput("D")}>D</button>
          <button className="F" onClick={() => HandleInput("F")}>F</button>
          <button className="G" onClick={() => HandleInput("G")}>G</button>
          <button className="H" onClick={() => HandleInput("H")}>H</button>
          <button className="J" onClick={() => HandleInput("J")}>J</button>
          <button className="K" onClick={() => HandleInput("K")}>K</button>
          <button className="L" onClick={() => HandleInput("L")}>L</button>
        </div>

        <div className='keyboard'>
          <button className='specChar BACKSPACE' onClick={() => HandleInput("BACKSPACE")}>BACK</button>
          <button className="Z" onClick={() => HandleInput("Z")}>Z</button>
          <button className="X" onClick={() => HandleInput("X")}>X</button>
          <button className="C" onClick={() => HandleInput("C")}>C</button>
          <button className="V" onClick={() => HandleInput("V")}>V</button>
          <button className="B" onClick={() => HandleInput("B")}>B</button>
          <button className="N" onClick={() => HandleInput("N")}>N</button>
          <button className="M" onClick={() => HandleInput("M")}>M</button>
          <button className='specChar ENTER' onClick={() => HandleInput("ENTER")}>ENTER</button>
        </div>
      </div>
    )
}