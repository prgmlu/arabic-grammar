import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function GrammarTopic() {
  const rules = useSelector(state => state.rule);

  return (
    <ul>
      {rules.map(rule => (
        <li key={rule.id}>
          <Link to={`/${rule.id}`}>{rule.topic}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GrammarTopic;
