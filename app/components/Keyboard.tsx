import React, { useEffect } from 'react';
import '../css/keyboard.css' 

export default function Keyboard(){
    var index = 0; 

    useEffect(() => {
        const handleEsc = async (event : any) => {
          AddEntry(event.key); 
        };
        window.addEventListener('keyup', handleEsc)
    }, []);
      
    function AddEntry(e : any){
        var input = document.getElementById("guess-input") as HTMLInputElement
        let valid = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "backspace", "enter"]
    
        if(!valid.includes(e.toLowerCase()) || e === " ") return; 
          
        if(e === "Backspace"){
          input.value = input.value.substring(0, index-1);
          index--;
          HandleAnimation(e);
          return; 
        }
        
        for(let i = 0; i < valid.length; i++){
          if(e.toUpperCase() === valid[i].toUpperCase()){
            input.value = input.value + e.toUpperCase();
            index++; 
          }
        }
         
        HandleAnimation(e); 
    }
    
    function HandleAnimation(e : any){
        let key = document.querySelector('.' + e.toUpperCase())
        key?.classList.add("selectedButton"); 
        setTimeout(() => key?.classList.remove("selectedButton"), 100)
    }
    
    return (
        <div className='keyboard-wrapper'>
        <div className='keyboard'>
          <button className="Q" onClick={() => AddEntry("Q")}>Q</button>
          <button className="W" onClick={() => AddEntry("W")}>W</button>
          <button className="E" onClick={() => AddEntry("E")}>E</button>
          <button className="R" onClick={() => AddEntry("R")}>R</button>
          <button className="T" onClick={() => AddEntry("T")}>T</button>
          <button className="Y" onClick={() => AddEntry("Y")}>Y</button>
          <button className="U" onClick={() => AddEntry("U")}>U</button>
          <button className="I" onClick={() => AddEntry("I")}>I</button>
          <button className="O" onClick={() => AddEntry("O")}>O</button>
          <button className="P" onClick={() => AddEntry("P")}>P</button>
        </div>

        <div className='keyboard'>
          <button className="A" onClick={() => AddEntry("A")}>A</button>
          <button className="S" onClick={() => AddEntry("S")}>S</button>
          <button className="D" onClick={() => AddEntry("D")}>D</button>
          <button className="F" onClick={() => AddEntry("F")}>F</button>
          <button className="G" onClick={() => AddEntry("G")}>G</button>
          <button className="H" onClick={() => AddEntry("H")}>H</button>
          <button className="J" onClick={() => AddEntry("J")}>J</button>
          <button className="K" onClick={() => AddEntry("K")}>K</button>
          <button className="L" onClick={() => AddEntry("L")}>L</button>
        </div>

        <div className='keyboard'>
          <button className='specChar ENTER'>ENTER</button>
          <button className="Z" onClick={() => AddEntry("Z")}>Z</button>
          <button className="X" onClick={() => AddEntry("X")}>X</button>
          <button className="C" onClick={() => AddEntry("C")}>C</button>
          <button className="V" onClick={() => AddEntry("V")}>V</button>
          <button className="B" onClick={() => AddEntry("B")}>B</button>
          <button className="N" onClick={() => AddEntry("N")}>N</button>
          <button className="M" onClick={() => AddEntry("M")}>M</button>
          <button className='specChar BACKSPACE' onClick={() => AddEntry("Backspace")}>BACK</button>
        </div>
      </div>
    )
}