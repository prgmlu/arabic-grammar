import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SentenceDisplay from './SentenceDisplay';

function RuleDisplay() {
  const { topicId } = useParams();
  const rules = useSelector(state => state.rule);
  const rule = rules.find(rule => rule.id === parseInt(topicId));

  if (!rule) return <div>Loading...</div>;

  return (
    <div >
      <h1>{rule.topic}</h1>
      {rule.examples.map((example, index) => (
        <SentenceDisplay key={index} example={example} rule={rule} />
      ))}
    </div>
  );
}

export default RuleDisplay;
