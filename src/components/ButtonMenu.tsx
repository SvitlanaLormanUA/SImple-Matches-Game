import '../styles/App.css';
import { useRef } from 'react';
import { ButtonMenuProps } from '../interfaces/GameInterfaces';

export default function ButtonMenu({ 
    turn, 
    onTakeMatches, 
    userMatches,
    setUserMatches,
    maxNumOfMatches,
    numOfMatches
}: ButtonMenuProps) {
    const thisPlayerMatchesRef = useRef(userMatches);

    const handleTakeMatches = (takenMatches: number) => {
        onTakeMatches(takenMatches);
        thisPlayerMatchesRef.current += takenMatches; 
        setUserMatches(thisPlayerMatchesRef.current); 
    };

    return (
        <div className={`button-menu ${turn ? 'visible' : 'hidden'}`}>
            {Array.from({ length: maxNumOfMatches }, (_, i) => (
                <button
                    key={i + 1}
                    className="takeMatches-option"
                    onClick={() => handleTakeMatches(i + 1)}
                    disabled={numOfMatches < i} 
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}
