import { useState } from 'react';
import { styled } from 'styled-components';

import { PlayerProps } from '../interfaces/PlayerProps';
import MatchesBag from './MatchesBag';

export default function Computer({ matchesLeft, turn }: PlayerProps) {
    const [localCount, setLocalCount] = useState(matchesLeft);
    const [localTurn, setLocalTurn] = useState(turn);

    let matchesHeld = 0;
    return (
        <>
            <div className='matches-amount'>
            <p>{matchesLeft}</p>
            <p>🥢</p>
            </div>
        </>
    );

    
}
