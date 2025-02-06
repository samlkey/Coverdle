'use client';
import React, { useState, useEffect, useRef } from 'react'; 
import { createPortal } from 'react-dom';
import { keepTheme } from '../utils/themes'
import '../css/game.css'
import Keyboard from './Keyboard';
import Guess from './Guess';
import AlertPop from './Alert';

export default function Game() {
  let dictionary = useRef<string[]>([]);
  let word = useRef<string>()
  let alertMessage = useRef<string>(); 
  let score = useRef<number>(0)
  let highscore = useRef<number>(0)

  const [showAlert, setShowAlert] = useState(false);
  let row = 0;
  let column = 0; 
  let guess = ""; 
  let roundActive = true; 
  let usedWords: (string | undefined)[] = []; 

  useEffect(() => {
    //set theme
    keepTheme();

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
      //do correct animation
      let rowNodes = grid?.children[row].children;
      let congrats = ["Excellent", "Well Done!", "Impressive!", "Nice!"]
      const randomIndex = Math.floor(Math.random() * congrats.length);
      
      alertMessage.current = congrats[randomIndex]
      setShowAlert(true)

      for(let i = 0; i < rowNodes!.length; i++){
        HandleAnimation(rowNodes![i], "bounce"); 
        await sleep(200);
      }

      await sleep(2500); 
      setShowAlert(false)
      ResetGame(); 
      score.current!++; 
      if(score.current > highscore.current) highscore.current = score.current; 
      return; 
    }

    if(row == 4){
      alertMessage.current = word.current; 
      score.current = 0;
      setShowAlert(true)
      await sleep(2500); 
      ResetGame(); 
      setShowAlert(false)
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

    //removing correction css
    cells.forEach(e => {
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
      case "bounce":
        e.classList.add("bounce-top");

        //causing a weird shift down, fix later...
        setTimeout(() => {
          e.classList.remove("bounce-top");
        }, 500)
    }
  }

  /*HELPER FUNCTIONS*/
  function sleep(ms : any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  return (
    <div className='game'>
      {showAlert && createPortal(
        <AlertPop message={alertMessage.current!} />,
        document.body
      )}

      <Guess></Guess>
      
      <div className="score-wrap-wrap">
        <div className="score-wrap">
          <p>Score</p>
          <p>
          {score.current}
          </p>
        </div>
      
        <div className="score-wrap">
          <p>High Score</p>
          <p>
          {highscore.current}
          </p>
        </div>
      </div>
      
      <Keyboard HandleInput={HandleInput}></Keyboard>
    </div>
  )
}

