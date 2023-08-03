'use client';
import Image from 'next/image'

import '../css/banner.css'
import settingsIcon from '../ui/settings.png'
import helpIcon from '../ui/help.png'

export default function Banner() {
    return (
      <div className="Wrapper">
        <h1>COVERDLE</h1>
        <div className="right-container">
          <a onClick={Settings}><Image src={settingsIcon} width={42} height={42} alt="Open Settings"/></a>
          <a onClick={Help}><Image src={helpIcon} width={42} height={42} alt="Open Help"/></a>
        </div>
      </div>
    )
}
  
function Settings(){
  console.log('Settings!')
}

function Help(){
  console.log('Help')
}
