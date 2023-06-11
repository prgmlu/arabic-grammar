import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRules } from './RuleSlice';
import GrammarTopic from './GrammarTopic';
import RuleDisplay from './RuleDisplay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  
  const mockFetchRules = () => [
    { 
      id: 1, 
      topic: 'Noun Case Endings',
      rule: 'In Arabic, nouns can have different case endings...',
      highlightColor: '#FF0000', 
      sound: 'https://tmpfiles.org/dl/1533068/alt-jbreezeblocks.mp3',
      examples: [
        {
          sentence: 'This is a test sentence.',
          highlightedIndices: [0, 1, 2]
        },
        {
          sentence: 'This is another test sentence.',
          highlightedIndices: [5, 6, 7]
        }
      ]
    },
    { 
      id: 2, 
      topic: 'Verb Conjugation',
      rule: 'Arabic verbs change based on the subject...',
      highlightColor: '#00FF00', 
      sound: 'https://tmpfiles.org/dl/1533068/alt-jbreezeblocks.mp3', 
      examples: [
        {
          sentence: 'This is a test sentence for verb conjugation.',
          highlightedIndices: [0, 1, 2]
        },
        {
          sentence: 'This is another test sentence for verb conjugation.',
          highlightedIndices: [5, 6, 7]
        }
      ]
    },
    { 
      id: 3, 
      topic: 'Adjective Agreement',
      rule: 'Adjectives in Arabic agree with the noun they modify...',
      highlightColor: '#0000FF', 
      sound: 'https://tmpfiles.org/dl/1533068/alt-jbreezeblocks.mp3', 
      examples: [
        {
          sentence: 'This is a test sentence for adjective agreement.',
          highlightedIndices: [0, 1, 2]
        },
        {
          sentence: 'This is another test sentence for adjective agreement.',
          highlightedIndices: [5, 6, 7]
        }
      ]
    }
  ];

  useEffect(() => {
    const rules = mockFetchRules();
    dispatch(setRules(rules));
  }, [dispatch]);

  const rules = useSelector(state => state.rule);

  return (
    <Router>
      <Routes>
        <Route path="/:topicId" element={<RuleDisplay />} />
        <Route path="/" element={<GrammarTopic />} />
      </Routes>
    </Router>
  );
}

export default App;
