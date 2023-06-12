import React, { useRef, useEffect } from 'react';
import PlayButton from './PlayButton';

function SentenceDisplay({ example, rule }) {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current = new Audio(rule.sound);
  }, [rule]);

  const handlePlaySound = () => {
    audioRef.current.play();
  };

  const highlightedSentence = example.sentence.split('').map((char, index) => 
    example.highlightedIndices.includes(index) 
      ? <span key={index} style={{ color: rule.highlightColor, backgroundColor: 'lightgrey' }}>{char}</span> 
      : char
  );

  return (
    <div>
      <p>{highlightedSentence}</p>
      <PlayButton handleClick={handlePlaySound} />
    </div>
  );
}

export default SentenceDisplay;
