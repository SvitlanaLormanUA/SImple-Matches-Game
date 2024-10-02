import { useEffect, useState } from 'react';

import { PlayerProps } from '../interfaces/PlayerProps';


export default function Computer({ matchesLeft, turn, handleBagClick, thisPlayerMatches }: PlayerProps) {
  useEffect(() => {
    if (!turn) {
      const computerTurn = Math.floor(Math.random() * 3) + 1;
      handleBagClick(computerTurn);
    }
  });
      return (
        <>
          <div className='matches-amount'>
            <p>{matchesLeft}</p>
            <p>🥢</p>
          </div>
        </>
      );


    
}

function computerLogic(matchesLeft) {
  if (matchesLeft%4 === 0) {
    
  }
}