import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRules } from './RuleSlice';
import GrammarTopic from './GrammarTopic';
import RuleDisplay from './RuleDisplay';
import MultiRuleDisplay from './MultiRuleDisplay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  const fetchRulesFromBackend = () => {
    return fetch('http://localhost:8000/api/rules/')
      .then(response => response.json());
  };
  

  useEffect(() => {
    fetchRulesFromBackend().then((rules) => {
      dispatch(setRules(rules));
    });
  }, [dispatch]);

  const rules = useSelector(state => state.rule);

  return (
    <Router>
      <Routes>
        <Route path="/rules/:topicIds" element={<MultiRuleDisplay />} />
        <Route path="/:topicId" element={<RuleDisplay />} />
        <Route path="/" element={<GrammarTopic />} />
      </Routes>
    </Router>
  );
}

export default App;