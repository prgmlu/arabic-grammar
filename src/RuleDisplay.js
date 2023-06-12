import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SentenceDisplay from './SentenceDisplay';

function RuleDisplay() {
  const { topicId } = useParams();
  const rules = useSelector(state => state.rule);
  const rule = rules.find(rule => rule.id === parseInt(topicId));
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  // If the rule is not found, display a loading message
  if (!rule) return <div>Loading...</div>;

  // Make sure that the rule has an examples array before trying to map over it
  if (!rule.examples) return <div>No examples found for this rule.</div>;

  const handleNextExample = () => {
    if (currentExampleIndex < rule.examples.length - 1) {
      setCurrentExampleIndex(currentExampleIndex + 1);
    }
  };

  const handlePrevExample = () => {
    if (currentExampleIndex > 0) {
      setCurrentExampleIndex(currentExampleIndex - 1);
    }
  };

  return (
    <div>
      <h1>{rule.topic}</h1>
      <SentenceDisplay example={rule.examples[currentExampleIndex]} rule={rule} />
      <button onClick={handlePrevExample}>Prev</button>
      <button onClick={handleNextExample}>Next</button>
    </div>
  );
}

export default RuleDisplay;
