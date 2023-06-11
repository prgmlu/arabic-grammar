// GrammarTopic.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';  // updated import

function GrammarTopic() {
  const rules = useSelector(state => state.rule);
  const [selectedRules, setSelectedRules] = useState([]);  // new state
  const navigate = useNavigate();  // new line

  const handleRuleSelect = (id) => {  // new function
    setSelectedRules(prev => {
      if (prev.includes(id)) {
        return prev.filter(ruleId => ruleId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleGoClick = () => {  // new function
    navigate(`/rules/${selectedRules.join(',')}`);
  };

  return (
    <div>
      <ul>
        {rules.map(rule => (
          <li key={rule.id}>
            <input
              type="checkbox"
              checked={selectedRules.includes(rule.id)}
              onChange={() => handleRuleSelect(rule.id)}
            />
            <Link to={`/${rule.id}`}>{rule.topic}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleGoClick}>Go</button>  // new button
    </div>
  );
}

export default GrammarTopic;
