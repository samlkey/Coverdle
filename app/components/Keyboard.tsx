import React, { useEffect } from 'react';
import '../css/keyboard.css' 

export default function Keyboard(){
    var column = 0;
    var row = 0; 

    let valid = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "BACKSPACE", "ENTER"]



    useEffect(() => {
        window.addEventListener('keyup', HandleInput)
    }, []);
      
    const HandleInput = async (e : any) => {
        let input = e.key.toUpperCase();

        if(!valid.includes(input)) return;

        switch(input){
            case "BACKSPACE": 
                RemoveEntry(input);
                break;
            case "ENTER":
                //submit
            default:
                AddEntry(input);
        }
    };


    function AddEntry(e : any){
        let grid = document.querySelector(".guess");
        let selNode = grid?.children[row].children[column].firstChild;

        let endNode = grid?.children[row].children[4].firstChild;

        if(endNode?.textContent != "") return;

        selNode!.textContent = e; 
        HandleAnimation(selNode?.parentNode, true);

        column++;

 


        console.log(column);
        //HandleAnimation(e); 
    }

    function RemoveEntry(e : any){
        let grid = document.querySelector(".guess");
        let selNode = grid?.children[row].children[column-1].firstChild;


        selNode!.textContent = "";
        HandleAnimation(selNode?.parentNode, false);

        if(column === 0) return; 

        column--;

        console.log(column);
  
    }

    function HandleAnimation(e : any, b : any){      
        
        if(b){
            e.setAttribute("status", "on");
            e.classList.add("pulsate-fwd");
        }
        else{
            e.setAttribute("status", "");
            e.classList.remove("pulsate-fwd");
        }
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
          <button className='specChar BACKSPACE' onClick={() => HandleInput("BACKSPACE")}>BACK</button>
        </div>
      </div>
    )
}