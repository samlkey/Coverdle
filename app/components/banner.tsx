'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image'

import '../css/banner.css'
import settingsIcon from '../ui/settings.png'
import helpIcon from '../ui/help.png'
import Setting from './Settings'

export default function Banner() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className="Wrapper">
        <h1>COVERDLE</h1>
        <div className="right-container">
          <a onClick={() => setShowModal(true)}><Image src={settingsIcon} width={42} height={42} alt="Open Settings"/></a>
          <a onClick={Help}><Image src={helpIcon} width={42} height={42} alt="Open Help"/></a>

          {showModal && createPortal(
              <Setting onClose={() => setShowModal(false)} />,
              document.body
          )}
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
