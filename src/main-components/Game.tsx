
import { useState, useEffect } from 'react';
import '../styles/App.css';

import Computer from '../components/Computer';
import User from '../components/User';
import MatchesBag from '../components/MatchesBag';
import ButtonMenu from '../components/ButtonMenu';
import FunctButton from './FunctButtons';

import { GameProps } from '../interfaces/GameInterfaces';

export default function Game({ userTurn: initialUserTurn, numberOfMatches: initialNumberOfMatches,
  maxMatchesToTake: initialMaxMatchesToTake }: GameProps) {
  const [matchesLeft, setMatchesLeft] = useState(initialNumberOfMatches);
  const [userTurn, setUserTurn] = useState(initialUserTurn);

  const [userMatches, setUserMatches] = useState(0);
  const [computerMatches, setComputerMatches] = useState(0);
  const [winner, setWinner] = useState('');




  const handleBagClick = (takenMatches: number) => {
      decrement(takenMatches);
      determineWinner();
  };

  const decrement = (takenMatches: number) => {
    if (Math.floor(matchesLeft) > 0) {
      setMatchesLeft(prevMatchesLeft => prevMatchesLeft - takenMatches);
      determineWinner();
      setUserTurn(!userTurn);
    } 
    determineWinner();
  };


  const determineWinner = () => {
    if (Math.floor(matchesLeft) == 0) {
      if (userMatches % 2 === 0) {
        setWinner('You');
      } else if (computerMatches % 2 === 0) {
        setWinner('Computer');
      }
    }
  }
  

  useEffect(() => {
    let winnerStr: string = '';
    if (winner) {
      if (winner === 'You') {
        winnerStr = `You are the winner!`;
      } else if (winner === 'Computer') {
        winnerStr = `Computer is the winner!`;
      }
      alert(winnerStr);
      resetGame(); 
    }
  }, [winner]);

  const resetGame = () => {
    setComputerMatches(0);
    setUserMatches(0);
    setMatchesLeft(initialNumberOfMatches);
    setUserTurn(initialUserTurn);
    setWinner('');
    
    
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
          maxNumOfMatches={initialMaxMatchesToTake}
          numOfMatches={matchesLeft}
        />
    </div>
        <User  thisPlayerMatches={userMatches} />
      </div>
      <FunctButton resetGame={resetGame} />
      </div>
    </>
  );
}


