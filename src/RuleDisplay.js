import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SentenceDisplay from './SentenceDisplay';

function RuleDisplay() {
  const { topicId } = useParams();
  const rules = useSelector(state => state.rule);
  const rule = rules.find(rule => rule.id === parseInt(topicId));

  // If the rule is not found, display a loading message
  if (!rule) return <div>Loading...</div>;

  // Make sure that the rule has an examples array before trying to map over it
  if (!rule.examples) return <div>No examples found for this rule.</div>;

  return (
    <div>
      <h1>{rule.topic}</h1>
      {rule.examples.map((example, index) => (
        <SentenceDisplay key={index} example={example} rule={rule} />
      ))}
    </div>
  );
}


export default RuleDisplay;
