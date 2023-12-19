'use client';
import React, { useEffect } from 'react'; 

import Banner from './Banner'


import '../css/game.css'
import Image from 'next/image';
import Marks from './Marks';

import Album from '../ui/album.png'

export default function Game() {
  var index = 0; 

  //need to gen 
  var numEntries = 20;

  useEffect(() => {
    const handleEsc = async (event : any) => {
      AddEntry(event.key); 
    };
    window.addEventListener('keyup', handleEsc)
  }, []);
  
  function AddEntry(e : any){
      var input = document.getElementById("guess-input") as HTMLInputElement
      //needs moving to gen
      numEntries = 0
      
      //valid characters
      let valid = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

      console.log(e)

      if(e === "Backspace"){
        input.value = input.value.substring(0, index-1);
        index--;
        return 
      }

      for(let i = 0; i < valid.length; i++){
        if(e.toUpperCase() === valid[i].toUpperCase()){
          input.value = input.value + e.toUpperCase();
          index++; 
  
          console.log(index)

        }
      }

      // if(e === "Backspace"){  
      //   if(index == 0) return

      //   index--;    
      //     btnArr[index].innerHTML = " "

      //     console.log(index)

        
      // }else 

      //input if space
      // if(index < numEntries){

      //   input.value = input.value + e.toUpperCase();
      //   index++; 
  
  
  
      //   console.log(index)
      
      // }

     
  }


  
    return (
      <div className='game'>
        <Image src={Album} width={450} height={450} alt='Album'/>

        <Marks></Marks>


        <input id='guess-input' readOnly={true}/>


      
        <div className='keyboard-wrapper'>
          <div className='keyboard'>
            <button onClick={() => AddEntry("Q")}>Q</button>
            <button onClick={() => AddEntry("W")}>W</button>
            <button onClick={() => AddEntry("E")}>E</button>
            <button onClick={() => AddEntry("R")}>R</button>
            <button onClick={() => AddEntry("T")}>T</button>
            <button onClick={() => AddEntry("Y")}>Y</button>
            <button onClick={() => AddEntry("U")}>U</button>
            <button onClick={() => AddEntry("I")}>I</button>
            <button onClick={() => AddEntry("O")}>O</button>
            <button onClick={() => AddEntry("P")}>P</button>
          </div>

          <div className='keyboard'>
            <button onClick={() => AddEntry("A")}>A</button>
            <button onClick={() => AddEntry("S")}>S</button>
            <button onClick={() => AddEntry("D")}>D</button>
            <button onClick={() => AddEntry("F")}>F</button>
            <button onClick={() => AddEntry("G")}>G</button>
            <button onClick={() => AddEntry("H")}>H</button>
            <button onClick={() => AddEntry("J")}>J</button>
            <button onClick={() => AddEntry("K")}>K</button>
            <button onClick={() => AddEntry("L")}>L</button>
          </div>

          <div className='keyboard'>
            <button className='specChar'>ENTER</button>
            <button onClick={() => AddEntry("Z")}>Z</button>
            <button onClick={() => AddEntry("X")}>X</button>
            <button onClick={() => AddEntry("C")}>C</button>
            <button onClick={() => AddEntry("V")}>V</button>
            <button onClick={() => AddEntry("B")}>B</button>
            <button onClick={() => AddEntry("N")}>N</button>
            <button onClick={() => AddEntry("M")}>M</button>
            <button className='specChar' onClick={() => AddEntry("Backspace")}>BACK</button>
          </div>

          

      
        </div>
        
        
      
      </div>
    )
}

