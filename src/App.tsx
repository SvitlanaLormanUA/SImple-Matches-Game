// App.js
import { useState, useEffect } from 'react';
import './styles/App.css';

import Computer from './components/Computer';
import User from './components/User';
import MatchesBag from './components/MatchesBag';

function App() {
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [userTurn, setUserTurn] = useState(true);
  const [winner, setWinner] = useState('');

  let computerMatches = 0;
  let userMatches = 0;

  const handleBagClick = (takenMatches: number) => {
    decrement(takenMatches);
  };

  const decrement = (takenMatches: number) => {
    if (matchesLeft >= 0) {
      setMatchesLeft(prevMatchesLeft => prevMatchesLeft - takenMatches);
      setUserTurn(!userTurn);
    } 
    determineWinner();
  };

  const determineWinner = () => {
    if (matchesLeft === 1) {
      setWinner(userTurn ? 'Computer' : 'User');
    } else if (matchesLeft === 0) {
      setWinner(userTurn ? 'User' : 'Computer');
    }
  };

  useEffect(() => {
    if (winner) {
      alert(`${winner} wins the game!`);
      resetGame(); // Reset the game when someone wins
    }
  }, [winner]);

  const resetGame = () => {
    setMatchesLeft(25);
    setUserTurn(true);
    setWinner('');
  };

  return (
    <>
      <div className="turn">
        <h1>{userTurn ? 'Your turn!' : 'The computer`s turn!'}</h1>
      </div>
      <div className="players"> 
        <Computer 
        matchesLeft={matchesLeft} 
        turn={userTurn} 
        handleBagClick={handleBagClick}
        thisPlayerMatches={computerMatches}
        />
        <MatchesBag 
          matchesLeft={matchesLeft} 
          userTurn={userTurn} 
          onBagClick={handleBagClick}
        
        />
        <User 
        matchesLeft={matchesLeft}
         turn={userTurn}
         handleBagClick={handleBagClick}
         thisPlayerMatches={userMatches}
          />
      </div>
    </>
  );
}

export default App;
