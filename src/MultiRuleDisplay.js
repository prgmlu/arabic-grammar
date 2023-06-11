// MultiRuleDisplay.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SentenceDisplay from './SentenceDisplay';

function MultiRuleDisplay() {
  const { topicIds } = useParams();
  const rules = useSelector(state => state.rule);
  const selectedRules = rules.filter(rule => topicIds.split(',').includes(rule.id.toString()));
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  const currentRule = selectedRules[currentRuleIndex];

  // If the rule is not found, display a loading message
  if (!currentRule) return <div>Loading...</div>;

  const handleNextExample = () => {
    if (currentExampleIndex < currentRule.examples.length - 1) {
      setCurrentExampleIndex(currentExampleIndex + 1);
    } else if (currentRuleIndex < selectedRules.length - 1) {
      setCurrentRuleIndex(currentRuleIndex + 1);
      setCurrentExampleIndex(0);
    }
  };

  const handlePrevExample = () => {
    if (currentExampleIndex > 0) {
      setCurrentExampleIndex(currentExampleIndex - 1);
    } else if (currentRuleIndex > 0) {
      setCurrentRuleIndex(currentRuleIndex - 1);
      setCurrentExampleIndex(selectedRules[currentRuleIndex - 1].examples.length - 1);
    }
  };

  return (
    <div>
      <h1>{currentRule.topic}</h1>
      <SentenceDisplay example={currentRule.examples[currentExampleIndex]} rule={currentRule} />
      <button onClick={handlePrevExample}>Prev</button>
      <button onClick={handleNextExample}>Next</button>
    </div>
  );
}

export default MultiRuleDisplay;
