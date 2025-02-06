import 'animate.css'
import Image from 'next/image'
import React, { useEffect } from 'react'; 
import github from '../ui/github.png'
import '../css/modal.css'
import crossIcon from '../ui/cross.png'

export default function Modal({ children, onClose } : {onClose:any, children:any}) {  
  useEffect(() => {
    const handleEsc = async (event : any) => {
      if(event.key === 'Escape'){
        onClose();
      }
    };
    window.addEventListener('keyup', handleEsc)

    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal-wrapper">
      <div className='modal-backdrop' onClick={onClose} />
        <div className="modal">
          <div className="modal-title">
            <h1>Settings</h1>
            <Image className="cross" src={crossIcon} width={50} height={50} onClick={onClose} alt='Close'/>
          </div>

          <div className="modal-content">
            {children}
          </div>
            
          <div className='modal-footer'>
            <div className='left-footer'>
            <p>@2025 Sam Key</p>
          </div>

          <div className='right-footer'>
            <Image src={github} width={60} height={60} alt='Github'/>
          </div>
        </div>
      </div>
    </div>
  );
}
