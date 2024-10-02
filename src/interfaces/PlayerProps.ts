
export interface PlayerProps {
    matchesLeft: number;
    turn: boolean;
    handleBagClick: (takenMatches: number) => void;
    thisPlayerMatches: number;
}