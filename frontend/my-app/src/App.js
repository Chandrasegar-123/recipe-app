// App.js
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import login from './pages/login';

function App() {
  return (
    <Router>
      
        <Route path="/" exact component={login} />
      
    </Router>
  );
}

export default App;
