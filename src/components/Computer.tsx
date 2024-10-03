import { useEffect, useState, useRef } from 'react';

import { ComputerProps } from '../interfaces/GameInterfaces';
import { set } from 'mongoose';


export default function Computer({
   matchesLeft, 
    turn,
    handleBagClick,
    thisPlayerMatches,
    setPlayerMatches }: ComputerProps) {
  
  const thisPlayerMatchesRef = useRef(thisPlayerMatches);

  useEffect(() => {
    if (!turn) {
      const timer = setTimeout(() => {
        let computerTurn = 0;
        if (matchesLeft % 4 === 0) {
          computerTurn = 3;
          
        } else if (matchesLeft % 4 === 3) {
          computerTurn = 3;
        } else if (matchesLeft % 4 === 2) {
          computerTurn = 2;
        } else if (matchesLeft % 4 === 1) {
          computerTurn = 1;
        }
        thisPlayerMatchesRef.current += computerTurn;
        setPlayerMatches(thisPlayerMatchesRef.current);
        handleBagClick(computerTurn);
      
      }, 1000); 
  
    
      return () => clearTimeout(timer);
    }
  }, );
  
      return (
        <>
        <div className='Computer-data'>
           <h2>Computer</h2>
          <div className='matches-amount'>
            <p>{thisPlayerMatches}</p>
            <p>🥢</p>
          </div>
          </div>
        </>
      );


     
    
}

