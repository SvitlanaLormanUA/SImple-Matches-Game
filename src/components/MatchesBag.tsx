import '../styles/App.css';

type MatchesBagProps = {
    matchesLeft: number;
    userTurn: boolean; 
    onBagClick: () => void; 
};

export default function MatchesBag({ matchesLeft, userTurn, onBagClick }: MatchesBagProps) {
    return (
        <div className="matches-bag">
            <p 
                className={`bag ${userTurn ? 'cursor-pointer' : ''}`} 
                onClick={userTurn ? onBagClick : undefined} 
            >
                📦
            </p>
            <p>{matchesLeft}</p>
        </div>
    );
}
