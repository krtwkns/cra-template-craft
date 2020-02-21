import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';

const App = () => (
  <Router>
    {routes.map((item, index) => (
      <Route key={index} exact path={item.path} component={item.page} />
    ))}
  </Router>
);

export default App;
