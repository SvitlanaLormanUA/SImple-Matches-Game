import { useState } from 'react'
import './styles/App.css'

import Computer from './components/Computer'
import User from './components/User'
import MatchesBag from './components/MatchesBag'

function App() {
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [userTurn, setUserTurn] = useState(true);

  const handleBagClick = () => {
      decrement();
      console.log('clicked: ' + matchesLeft);
     
  };


const decrement = () => {
   if (matchesLeft > 0) {
    setMatchesLeft(matchesLeft => matchesLeft - 1);
   }
};
  return (
    <>
     <div className="players"> 
        <Computer matchesLeft={matchesLeft} turn={userTurn} />
  
        <MatchesBag 
        matchesLeft={matchesLeft} 
        userTurn={userTurn} 
        onBagClick={handleBagClick}/>
        <User matchesLeft={matchesLeft} turn={userTurn} />
      </div>
    </>
  )
}

export default App
