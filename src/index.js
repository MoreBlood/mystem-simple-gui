import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './pages/App';

const basename = process.env.NODE_ENV === 'production' ? '/mystem-simple-gui/build/' : undefined;

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basename}>
      <Switch>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);