'use client';
import React, { useEffect } from 'react'; 
import '../css/game.css'
import Keyboard from './Keyboard';
import Guess from './Guess';

export default function Game() {
  //game loop, use to check for game state and update 
  let rowI = 1;
  let columnI = 1; 


  useEffect(()=> {
    const gameInterval: NodeJS.Timer = setInterval(
      () => Update(), 100
    );

    //end of the row    
    if(columnI === 5){

      //end of the game
      if(rowI == 5){

      }
    } 


    return () => clearInterval(gameInterval)
  })

  const HandleInput = async (e : any) => {
    let input = e.key.toUpperCase();
    console.log(input) 


    // if(!valid.includes(input)) return;

    // switch(input){
    //     case "BACKSPACE": 
    //         RemoveEntry(input);
    //         break;
    //     case "ENTER":
    //         //submit
    //         SubmitAnswer();
    //         break;
    //     default:
    //         AddEntry(input);
    // }
};

  function Update(){
    console.log("Tick"); 
  }
  
  return (
    <div className='game'>
      <Guess></Guess>
      <Keyboard keyPressed={HandleInput}></Keyboard>
    </div>
  )
}

