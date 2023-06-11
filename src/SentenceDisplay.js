import React, { useRef, useEffect } from 'react';

function SentenceDisplay({ example, rule }) {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current = new Audio(rule.sound);
  }, [rule]);

  const handleSentenceClick = () => {
    audioRef.current.play();
  };

  const highlightedSentence = example.sentence.split('').map((char, index) => 
    example.highlightedIndices.includes(index) 
      ? <span style={{ color: rule.highlightColor, backgroundColor: 'lightgrey' }}>{char}</span> 
      : char
  );

  return (
    <p onClick={handleSentenceClick}>
      {highlightedSentence} 
    </p>
  );
}

export default SentenceDisplay;
