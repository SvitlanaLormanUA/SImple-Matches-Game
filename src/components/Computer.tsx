import { useEffect, useState, useRef } from 'react';

import { PlayerProps } from '../interfaces/PlayerProps';


export default function Computer({
   matchesLeft, 
    turn,
    handleBagClick,
    thisPlayerMatches }: PlayerProps) {
  
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
        handleBagClick(computerTurn);
      
      }, 3000); 
  
    
      return () => clearTimeout(timer);
    }
  }, );
  
      return (
        <>
          <div className='matches-amount'>
            <p>{thisPlayerMatchesRef.current}</p>
            <p>🥢</p>
          </div>
        </>
      );


     
    
}

