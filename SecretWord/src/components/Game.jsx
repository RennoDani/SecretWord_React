import { useState, useRef } from 'react';
import './Game.css';

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) => {

    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterInputRef.current.focus();
    }

    return (
        <div className='game'>
            {/* <h1>Game</h1>
        <button onClick={verifyLetter}>End game</button> */}

            <p className="points">
                <span>Game Score: {score}</span>
            </p>

            <h1>Guess the word:</h1>
            <h3 className='tip'>
                Word tip: <span>{pickedCategory}</span>
            </h3>

            <p>You have {guesses} attempt(s).</p>

            <div className="wordContainer">
                {letters.map((letter, i) => guessedLetters.includes(letter) ? (
                    <span key={i} className='letter'>{letter}</span>
                ) : (
                    <span key={i} className='blankSquare'></span>
                ))}
            </div>

            <div className="letterContainer">
                <p>Try to guess the letter of the word</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="letter" maxLength="1" required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Play!</button>
                </form>
            </div>

            <div className="wrongLettersContainer">
                <p>Letters already used:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}> {letter}, </span>
                ))}

            </div>


        </div>
    )
}

export default Game