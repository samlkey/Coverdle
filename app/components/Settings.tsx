import { useEffect, useState } from 'react';
import { setTheme } from '../utils/themes'
import '../css/settings.css'

export default function Settings() {
  const [togState, setTogState] = useState('dark')

  useEffect(() => {
    if(localStorage.getItem('theme') === 'theme-dark'){
      setTogState('dark')
    }
    else if(localStorage.getItem('theme') === 'theme-light'){
      setTogState('light')
    }
  }, [])

  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTogState('light')
      setTheme('theme-light');
      sleep(2000);
    } else {
      setTogState('dark')
      setTheme('theme-dark');
      sleep(2000);
    }
  }

  /*HELPER FUNCTIONS*/
  function sleep(ms : any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  return (
    <div className="settings-content">            
      <div className='settings-container'>
        <div className='email-left'>
          <h2>Theme</h2>
          <p>Switch from Dark Theme, to Light Theme.</p>
        </div>
        
        <div className='email-right'>
          <label className="switch">

            <input 
              type="checkbox" 
              onChange={handleOnClick} 
              checked={togState === "light"} // Ensures checked is always boolean
            />
            <span className="slider round"></span>
          </label>
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