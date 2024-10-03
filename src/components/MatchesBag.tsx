import '../styles/App.css';
import { MatchesBagProps } from '../interfaces/GameInterfaces';


export default function MatchesBag({ matchesLeft, userTurn, onBagClick }: MatchesBagProps) {
    
    return (
        <>
     
        <div className={`matches-bag ${userTurn ? `tooltip` : ``}`}>
            <span className={`tooltiptext ${userTurn ? `visible` : `not-visible`}`}>Click on the buttons on the right to take matches</span>
            <p className={`bag ${userTurn ? 'cursor-pointer' : ''}`} >
                📦
            </p>
            <p>{matchesLeft}</p>
        </div>
        </>
    );
}
