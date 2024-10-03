
export interface ComputerProps {
    matchesLeft: number;
    turn: boolean;
    handleBagClick: (takenMatches: number) => void;
    thisPlayerMatches: number;
    setPlayerMatches: (matches: number) => void;
}
export interface UserProps {
    thisPlayerMatches: number;
}
export interface ButtonMenuProps {
    turn: boolean;
    onTakeMatches: (takenMatches: number) => void; 
    userMatches: number;
    setUserMatches: (matches: number) => void;
    maxNumOfMatches: number;
    numOfMatches: number;
}
export interface MatchesBagProps {
    matchesLeft: number;
    userTurn: boolean; 
    onBagClick: (takenMatches: number) => void; 
};
export interface GameProps {
    userTurn: boolean;
    numberOfMatches: number; //2*n + 1 --> user enterns "n"
    maxMatchesToTake: number;

  }
 export interface FunctButtonProps  {
    resetGame: () => void;
  };
  