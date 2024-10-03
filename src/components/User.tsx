import { useState } from 'react';
import { UserProps } from '../interfaces/GameInterfaces';
import MatchesBag from './MatchesBag'; 

export default function User({ thisPlayerMatches }: UserProps) {
                   
    return (
        <>
        <div className='User-data'>
           <h2>You</h2>
             <div className='matches-amount'>
                <p>{thisPlayerMatches}</p>
                <p>🥢</p>
            </div>
            </div>
        </>
    );
}