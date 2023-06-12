React Rules Frontend
This is a simple React-based frontend for managing language rules and examples. It uses Redux for state management, React-Router for routing, and interacts with the Django API backend to fetch data.

#bash

```bash
git clone https://github.com/prgmlu/arabic-grammar.git
;cd arabic-grammar;
npm install;
npm start
```

The frontend will be served at http://localhost:3000/.


Note:
Please make sure the Django backend server is running at http://localhost:8000/api/rules/ as the React frontend will make requests to this endpoint.

Additional Configuration:
The project uses Redux for state management. The root Redux store is configured in index.js.

Routes are configured in App.js. The main routes are:

/rules/:topicIds: Displays multiple rules, where :topicIds is a comma-separated list of rule IDs.
/:topicId: Displays a single rule, where :topicId is the ID of the rule.
/: The root route that displays all the topics.
For a better understanding of the project, please refer to the individual files for comments and explanations of the code.
