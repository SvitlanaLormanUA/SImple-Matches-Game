import { useState } from 'react';
import Game from "./Game"; 
import '../styles/Mode.css';

export default function Mode() {
    const [selectedMode, setSelectedMode] = useState<string | null>(null); 
    const [nValue, setNValue] = useState<number>(12); // Default value for `n`
    const [numOfMatches, setNumOfMatches] = useState<number>(25);
    const [maxMatchesToTake, setMaxMatchesToTake] = useState<number>(3);
    const [showGame, setShowGame] = useState<boolean>(false);
    const [inputError, setInputError] = useState<boolean>(false);

    const handleSelectMode = (event: React.MouseEvent<HTMLButtonElement>) => {
        const userTurn = event.currentTarget.className === "mode-option1";
        setSelectedMode(userTurn ? 'user' : 'computer');
    };

    const handleNValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const n = parseInt(e.target.value);
        setNValue(n);
        const newNumOfMatches = 2 * n + 1;
        setNumOfMatches(newNumOfMatches);

        // Revalidate the maximum number of matches to take
        if (maxMatchesToTake > newNumOfMatches) {
            setInputError(true);
        } else {
            setInputError(false);
        }
    };

    const handleMaxMatchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maxMatches = parseInt(e.target.value);
        setMaxMatchesToTake(maxMatches);

        // Validate if maxMatchesToTake is less than or equal to numOfMatches
        if (maxMatches > numOfMatches) {
            setInputError(true);
        } else {
            setInputError(false);
        }
    };

    const handleSubmit = () => {
        // Prevent submission if there's an error
        if (!inputError) {
            setShowGame(true);
        }
    };

    if (showGame && selectedMode) {
        return (
            <Game 
                userTurn={selectedMode === 'user'} 
                numberOfMatches={numOfMatches} 
                maxMatchesToTake={maxMatchesToTake} 
            />
        );
    }

    if (selectedMode) {
        return (
            <>
                <div className='setValues'>
                    <div className='numInputContainer'>
                        <label htmlFor="enterNum">
                            The number of matches in the bag is calculated using <i>2n + 1</i> formula. Please, enter the value for n below:
                        </label>
                        <input 
                            type="number" 
                            placeholder='12' 
                            name="enterNum" 
                            min={1} 
                            value={nValue}
                            onChange={handleNValueChange}
                        />
                    </div>

                    <div className='numInputContainer'>
                        <label htmlFor="enterMax">Enter the max number of matches to take: </label>
                        <input 
                            type="number" 
                            placeholder='3' 
                            name="enterMax" 
                            min={1} 
                            value={maxMatchesToTake}
                            onChange={handleMaxMatchesChange}
                            style={{ borderColor: inputError ? 'red' : '' }}
                        />
                        {inputError && (
                            <p className="error-message">
                                Max matches to take must be less than or equal to {numOfMatches}.
                            </p>
                        )}
                    </div>

                    <button 
                        type='submit' 
                        onClick={handleSubmit} 
                        className="submitNumsBtn"
                        disabled={inputError}
                    >
                        Submit
                    </button>
                </div>
            </>
        );
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
