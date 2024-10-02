import { useState } from 'react';
import { PlayerProps } from '../interfaces/PlayerProps';
import MatchesBag from './MatchesBag'; 

export default function User({ matchesLeft, turn }: PlayerProps) {
    return (
        <>
             <div className='matches-amount'>
                <p>{matchesLeft}</p>
                <p>🥢</p>
            </div>
        </>
    );
}