'use client';
import React, { useState, useEffect, useRef } from 'react'; 
import '../css/game.css'
import Keyboard from './Keyboard';
import Guess from './Guess';

export default function Game() {
  let dictionary = useRef<string[]>([]);
  let word = useRef<string>()
  let row = 0;
  let column = 0; 
  let guess = ""; 
  let roundActive = true; 
  let usedWords: (string | undefined)[] = []; 

  useEffect(() => {
    fetch("/dictionary.txt")
      .then(response => response.text())
      .then(text => {
        const lines: string[] = text.split("\n").map(line => line.trim()).filter(line => line !== "");
        dictionary.current = lines; 

    
        let foundWord = false;

        while(!foundWord){
          const randomIndex = Math.floor(Math.random() * dictionary.current.length);

          if(!usedWords.includes(dictionary.current[randomIndex].toUpperCase()))
          {
            word.current = dictionary.current[randomIndex].toUpperCase()
            foundWord = true;
          }
        }
        console.log(word.current)
      })
      .catch(error => console.error("Error loading file:", error));
  }, []);

  /* GAME LOOP */
  // useEffect(()=> {
  //   const gameInterval: NodeJS.Timer = setInterval(
  //     () => Update(), 100
  //   );
  //   return () => clearInterval(gameInterval)
  // })

  // function Update(){

  // }

  /* METHODS FOR GAME STATE */
  async function SubmitAnswer(){
    roundActive = false; 
    let grid = document.querySelector(".guess");
    let wordArray = word.current!.split("") 
    let localArray = word.current!.split("") 

    for(let i = 0; i < wordArray.length; i++){
      let checkNode = grid?.children[row].children[i].firstChild;
      let keyboardBtn = document.querySelector("." + checkNode?.textContent);

      //remove keyboard css
      checkNode?.parentElement!.classList.remove("correct")
      checkNode?.parentElement!.classList.remove("wrongLocation")
      checkNode?.parentElement!.classList.remove("incorrect")

      if(checkNode?.textContent == wordArray[i]){
        localArray[i] = "*"
        checkNode?.parentElement!.classList.add("correct")
        keyboardBtn!.classList.add("correct")

      }
      else if(wordArray.includes(checkNode?.textContent!) && localArray.includes(checkNode?.textContent!)){
        localArray[localArray.indexOf(checkNode?.textContent!)] = "*"
        checkNode?.parentElement!.classList.add("wrongLocation")
        keyboardBtn!.classList.add("wrongLocation")
      }
      else{
        checkNode?.parentElement!.classList.add("incorrect")
        keyboardBtn!.classList.add("incorrect")
      }
      HandleAnimation(checkNode?.parentElement!, "flip");
      await sleep(300);
    }

    //check if correct
    if(guess == word.current!){
      await sleep(1000); 
      ResetGame(); 
      return; 
    }

    //check if end
    if(row == 4){
      await sleep(1000); 
      ResetGame(); 
      return; 
    }

    row++;
    column = 0;
    roundActive = true;
    guess = ""; 
  }

  function ResetGame(){
    let cells = document.querySelectorAll(".guess-row-cell");
    let btn = document.querySelectorAll(".keyboard button");

    usedWords.push(word.current)
    roundActive = false; 

    cells.forEach(e => {
      //removing correction css
      e.classList.remove("correct")
      e.classList.remove("wrongLocation")
      e.classList.remove("incorrect")
      e.setAttribute("status", "off");

      e.firstChild!.textContent = ""; 
    });
    
    btn.forEach(e => {
      e.classList.remove("correct")
      e.classList.remove("wrongLocation")
      e.classList.remove("incorrect")
    });
    
    let foundWord = false;

    while(!foundWord){
      const randomIndex = Math.floor(Math.random() * dictionary.current.length);

      if(!usedWords.includes(dictionary.current[randomIndex].toUpperCase()))
      {
        word.current = dictionary.current[randomIndex].toUpperCase()
        foundWord = true;
      }
    }

    console.log(word.current)

    guess = ""; 
    column = 0;
    row = 0; 
    roundActive = true; 
  }

  function sleep(ms : any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* METHODS FOR ANSWER ENTRY */
  const HandleInput = async (e : any) => {
    let grid = document.querySelector(".guess");
    let selRow = grid?.children[row];

    switch(e)
    {
      case "ENTER":
        if(column == 5 && roundActive && dictionary.current.includes(guess.toLowerCase()))
        {
          await SubmitAnswer();
        }
        else if(roundActive)
        {
          HandleAnimation(selRow, "wronginput")
        }
        break; 
      case "BACKSPACE":
        if(roundActive && column != 0)
        {
          RemoveEntry(e);
        } 
        else
        {
          HandleAnimation(selRow, "wronginput")
        }
        break;
      default:
        if(roundActive) AddEntry(e);
        break;
    }
  }
  
  function AddEntry(e : any){
    if(column == 5) return; 

    let grid = document.querySelector(".guess");
    let selNode = grid?.children[row].children[column].firstChild;
    selNode!.textContent = e; 
    HandleAnimation(selNode?.parentNode, "statuson");
    column++; 

    guess += e; 
  }

  function RemoveEntry(e : any){
    if(column == 0) return;

    let grid = document.querySelector(".guess");
    let selNode = grid?.children[row].children[column-1].firstChild;
    selNode!.textContent = ""; 
    HandleAnimation(selNode?.parentNode, "statusoff");

    guess = guess.slice(0, -1)
    if(column != 0) column--; 
  }

  /* ANIMATION FUNCTIONS */
  function HandleAnimation(e : any, type : any){     
    switch(type){
      case "statuson":
        e.setAttribute("status", "on");
        e.classList.add("pulsate-fwd");

        //causing a weird shift down, fix later...
        setTimeout(() => {
          e.classList.remove("pulsate-fwd");
        }, 1000)

        break;
      case "statusoff":
        e.setAttribute("status", "off");
        break;
      case "wronginput":
        e.classList.add("shake-horizontal");

        setTimeout(() => {
            e.classList.remove("shake-horizontal");
        }, 1000)
        break;
      case "flip":
        e.classList.add("flip-vertical-right")
        setTimeout(() => {
          e.classList.remove("flip-vertical-right");
        }, 1000)
        break;
    }
  }
  
  return (
    <div className='game'>
      <Guess></Guess>
      <Keyboard HandleInput={HandleInput}></Keyboard>
    </div>
  )
}

