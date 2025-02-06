'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image'
import '../css/banner.css'
import settingsIcon from '../ui/settings.png'
import helpIcon from '../ui/help.png'
import Modal from './Modal'
import Setting from './Settings'

export default function Banner() {
  const [showModal, setShowModal] = useState(false);
    
  return (
    <div className="Wrapper">
      <h1>WORDLE</h1>
      <div className="right-container">
        <a onClick={() => setShowModal(true)}><Image className="image" src={settingsIcon} width={42} height={42} alt="Open Settings"/></a>
        <a onClick={Help}><Image src={helpIcon} width={42} height={42} alt="Open Help"/></a>

        {showModal && createPortal(
            <Modal onClose={() => setShowModal(false)}> 
              <Setting />
            </Modal>,
            document.body
        )}
      </div>
    </div>
  )
}
  
function Help(){
  console.log('Help')
}
