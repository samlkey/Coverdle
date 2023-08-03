//import Image from 'next/image'

/*todo:

COMPONENTS:
  Banner 
  Tutorial
  Game
  Footer
  Settings
  Intro



things to investigate:
className
*/


import Game from './components/game'
import Banner from './components/banner'

export default function Home() {
  return (
    <div id="main-page">
      <Banner/>
      <Game/>
    </div>
  )
}
