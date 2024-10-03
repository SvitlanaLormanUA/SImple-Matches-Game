import { useState } from 'react';
import Game from "./Game"; 
import '../styles/Mode.css';

export default function Mode() {
    const [selectedMode, setSelectedMode] = useState<string | null>(null); 

    const handleSelectMode = (event: React.MouseEvent<HTMLButtonElement>) => {
        const userTurn = event.currentTarget.className === "mode-option1";
        setSelectedMode(userTurn ? 'user' : 'computer');
    };

    if (selectedMode) {
        return <Game userTurn={selectedMode === 'user'} />;
    }

    return (
        <div className="mode">
            <h1>Choose a mode</h1>
            <div className='mode-buttons'>
                <button className="mode-option1" onClick={handleSelectMode}>You Start First</button>
                <button className="mode-option2" onClick={handleSelectMode}>Computer Starts First</button>
            </div>
        </div>
    );
}
