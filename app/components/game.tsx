'use client';

import '../css/game.css'
import Image from 'next/image';

import Album from '../ui/album.png'

export default function Game() {
    return (
      <div className='game'>
        <Image src={Album} width={450} height={450} alt='Album'/>

        <div className="guess-wrapper">
          <div className="guess">
          <button>T</button>
          <button>H</button>
          <button>E</button>
          <button className='blank'>-</button>
          <button>D</button>
          <button>A</button>
          <button>R</button>
          <button>K</button>
          

          </div>

          <div className="guess">
          <button>S</button>
          <button>I</button>
          <button>D</button>
          <button>E</button>
          <button className='blank'>-</button>
          <button>O</button>
          <button>F</button>
          <button className='condblank'>-</button>



          </div>
          <div className="guess">
          <button>T</button>
          <button>H</button>
          <button>E</button>
          <button className='blank'>-</button>
          <button>M</button>
          <button>O</button>
          <button>O</button>
          <button>N</button>

          </div>

        </div>


      
        <div className='keyboard-wrapper'>
          <div className='keyboard'>
            <button>Q</button>
            <button>W</button>
            <button>E</button>
            <button>R</button>
            <button>T</button>
            <button>Y</button>
            <button>U</button>
            <button>I</button>
            <button>O</button>
            <button>P</button>
          </div>

          <div className='keyboard'>
            <button>A</button>
            <button>S</button>
            <button>D</button>
            <button>F</button>
            <button>G</button>
            <button>H</button>
            <button>J</button>
            <button>K</button>
            <button>L</button>
          </div>

          <div className='keyboard'>
            <button className='specChar'>ENTER</button>
            <button>Z</button>
            <button>X</button>
            <button>C</button>
            <button>V</button>
            <button>B</button>
            <button>N</button>
            <button>M</button>
            <button className='specChar'>BACK</button>
          </div>

          

      
        </div>
        
        
      
      </div>
    )
}