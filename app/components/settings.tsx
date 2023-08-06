import '../css/modal.css'
import 'animate.css'
import Image from 'next/image'

import crossIcon from '../ui/cross.png'

export default function ModalContent({ onClose } : {onClose:any}) {
    return (
      <div className="modal-wrapper">

        <div className='modal-backdrop' onClick={onClose}></div>


        <div className="modal">
          <div className="modal-content">            
            
            <div className="modal-title">

              <h1>SETTINGS</h1>
              {/* <button onClick={onClose}>Close</button> */}

              <Image className="cross" src={crossIcon} width={50} height={50} onClick={onClose} alt='Close'/>

            </div>
            
         
          
            <div className='settings-container'>
              <div className='email-left'>

              <h2>Dark Theme</h2>
                <p>Switch from Dark Theme, to Light Theme.</p>
              </div>
              
              
             

              <div className='email-right'>
                <h2>Email</h2>

              </div>

            </div>

            <div className='settings-container'>
              <div className='email-left'>

                <h2>Feedback</h2>
                <p>Leave some feedback!</p>
              </div>




              <div className='email-right'>
                <h2>Email</h2>

              </div>
              
            </div>

            <div className='settings-container'>
              <h2>Report a Bug</h2>
              <p>Report an issue with the game.</p>
            </div>

            <div className='settings-container'>
              <h2>GitHub</h2>
              <p>View my repository!</p>
            </div>
            



            
          
          
          
          </div>

          <></>
      
      
        </div>


 



      </div>
      

      
    );
}
  