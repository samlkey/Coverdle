'use client';

import '../css/banner.css'
import Image from 'next/image'

import settingsIcon from '../images/settings.png'
import helpIcon from '../images/help.png'

export default function Banner() {
  

    function Settings(e: { preventDefault: () => void; }){
        console.log('Settings!')
    }
  
    function Help(e: { preventDefault: () => void; }){
      console.log('Settings!')
  }
  
    return (
      <div className="Wrapper">
        <h1>COVERDLE</h1>

        <div className="right-container">
          
          <a>
                 
            <Image
                src={settingsIcon}
                width={42}
                height={42}
                alt="Settings"
            />
            
          </a>
          
          
          <a onClick={Help}>
                 
            <Image
                src={helpIcon}
                width={42}
                height={42}
                alt="Settings"
            />
            
          </a>
        </div>



      </div>
    )
  }
  