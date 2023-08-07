import Image from 'next/image'
import '../css/settings.css'



export default function Settings() {
    return (
        <div className="settings-content">           
           
            
        <div className='settings-container'>
          <div className='email-left'>
            <h2>Dark Theme</h2>
            <p>Switch from Dark Theme, to Light Theme.</p>
            </div>
        
          <div className='email-right'>
            <h2>Switch</h2>
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
          <div className='email-left'>

            <h2>Report Bug</h2>
            <p>Report an issue with the game.</p>
          </div>

          <div className='email-right'>
            <h2>Email</h2>            
          </div>
        </div>


       


      </div>


    )
};


