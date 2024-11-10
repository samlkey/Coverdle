'use client';
import React, { useEffect } from 'react'; 
import '../css/game.css'
import Keyboard from './Keyboard';
import Guess from './Guess';

export default function Game() {
  return (
    <div className='game'>
      <Guess></Guess>
      <Keyboard></Keyboard>
    </div>
  )
}

