import { FunctButtonProps } from '../interfaces/GameInterfaces.ts';
import '../styles/App.css';

export default function FunctButton({ resetGame }: FunctButtonProps) {
 
  const handleResetGame = () => {
  resetGame();
  };
  const handleModeRechoosing = () => {
    document.location.reload();
  }

  return (
    <>
    <div className='func-buttons'>
        <button onClick={handleResetGame}>Reset</button>
        <button onClick={handleModeRechoosing}>Choose Mode</button>
    </div>
  </>
  );
}