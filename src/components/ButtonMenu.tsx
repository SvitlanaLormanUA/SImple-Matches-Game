import '../styles/App.css';
import { useRef } from 'react';
import { ButtonMenuProps } from '../interfaces/GameInterfaces';


export default function ButtonMenu({ 
    turn, 
    onTakeMatches, 
    userMatches,
    setUserMatches
}: ButtonMenuProps) {
    const thisPlayerMatchesRef = useRef(userMatches);

    return (
        <div className={`button-menu ${turn ? 'visible' : 'hidden'}`}>
            <button className="takeMatches-option" onClick={() => { 
                onTakeMatches(1);
                thisPlayerMatchesRef.current += 1; 
                setUserMatches(thisPlayerMatchesRef.current); 
            }}>1</button>
            <button className="takeMatches-option" onClick={() => { 
                onTakeMatches(2);
                thisPlayerMatchesRef.current += 2; 
                setUserMatches(thisPlayerMatchesRef.current); 
            }}>2</button>
            <button className="takeMatches-option" onClick={() => { 
                onTakeMatches(3);
                thisPlayerMatchesRef.current += 3; 
                setUserMatches(thisPlayerMatchesRef.current); 
            }}>3</button>
        </div>
    );
}
