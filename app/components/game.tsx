'use client';
import React, { useEffect } from 'react'; 
import '../css/game.css'
import Image from 'next/image';
import Marks from './Marks';
import Keyboard from './Keyboard';
import Album from '../ui/album.png'

export default function Game() {
  return (
    <div className='game'>
      <Image src={Album} width={450} height={450} alt='Album'/>

      <Marks></Marks>

      <div className="input-wrapper">
        <input id='guess-input' readOnly={true}/>
      </div>

      <Keyboard></Keyboard>
    
    </div>
  )
}

