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
      sound: 'sound1.mp3', 
      examples: [
        {
          sentence: 'This is the first example sentence',
          highlightedIndices: [0, 4]
        },
        {
          sentence: 'This is the second example sentence',
          highlightedIndices: [5, 6]
        },
        // More examples
        {
          sentence: 'This is the third example sentence',
          highlightedIndices: [3, 7]
        },
        {
          sentence: 'This is the fourth example sentence',
          highlightedIndices: [8, 9]
        },
      ]
    },
    // More rules...
    { 
      id: 2, 
      topic: 'Verb Conjugation',
      rule: 'Arabic verbs change based on the subject...',
      highlightColor: '#00FF00', 
      sound: 'sound2.mp3', 
      examples: [
        {
          sentence: 'This is a conjugated verb',
          highlightedIndices: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
        },
        {
          sentence: 'This verb is in the past tense',
          highlightedIndices: [5, 6, 7, 8]
        },
        // More examples
        {
          sentence: 'This verb is in the present tense',
          highlightedIndices: [5, 6, 7, 8]
        },
        {
          sentence: 'This is a future tense verb',
          highlightedIndices: [14, 15, 16, 17, 18]
        },
      ]
    },
    { 
      id: 3, 
      topic: 'Adjective Agreement',
      rule: 'Adjectives in Arabic agree with the noun they modify...',
      highlightColor: '#0000FF', 
      sound: 'sound3.mp3', 
      examples: [
        {
          sentence: 'This is a big house',
          highlightedIndices: [10, 11, 12, 13, 14]
        },
        {
          sentence: 'This is a small car',
          highlightedIndices: [10, 11, 12, 13]
        },
        // More examples
        {
          sentence: 'The old man is wise',
          highlightedIndices: [4, 5, 6]
        },
        {
          sentence: 'The young woman is intelligent',
          highlightedIndices: [4, 5, 6, 7, 8]
        },
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
