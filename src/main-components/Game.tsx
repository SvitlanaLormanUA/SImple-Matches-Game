
import { useState, useEffect } from 'react';
import '../styles/App.css';

import Computer from '../components/Computer';
import User from '../components/User';
import MatchesBag from '../components/MatchesBag';
import ButtonMenu from '../components/ButtonMenu';
import FunctButton from './FunctButtons';

import { GameProps } from '../interfaces/GameInterfaces';

export default function Game({ userTurn: initialUserTurn }: GameProps) {
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [userTurn, setUserTurn] = useState(initialUserTurn);

  const [userMatches, setUserMatches] = useState(0);
  const [computerMatches, setComputerMatches] = useState(0);
  const [winner, setWinner] = useState('');




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
    if (matchesLeft === 0) {
      setWinner(userTurn ? 'Computer' : 'User');
    } 
  };

  useEffect(() => {
    if (winner) {
      alert(`${winner} wins the game!`);
      resetGame(); 
    }
  }, [winner]);

  const resetGame = () => {
    setMatchesLeft(25);
    setUserTurn(initialUserTurn);
    setWinner('');
    setComputerMatches(0);
    setUserMatches(0);
    
  };

  return (
    <>
    <div className="the-game">
      <div className="turn">
        <h1>{userTurn ? 'Your turn!' : 'The computer`s turn!'}</h1>
      </div>
      <div className="players"> 
        <Computer 
        matchesLeft={matchesLeft} 
        turn={userTurn} 
        handleBagClick={handleBagClick}
        thisPlayerMatches={computerMatches}
        setPlayerMatches = {setComputerMatches}
        />

        <div className="users-funct-for-taking-matches">
            <MatchesBag 
              matchesLeft={matchesLeft} 
              userTurn={userTurn} 
              onBagClick={handleBagClick}
            />
              <ButtonMenu 
          turn={userTurn} 
          onTakeMatches= {decrement} 
          userMatches={userMatches}
          setUserMatches={setUserMatches}
        />
    </div>
        <User  thisPlayerMatches={userMatches} />
      </div>
      <FunctButton resetGame={resetGame} />
      </div>
    </>
  );
}


