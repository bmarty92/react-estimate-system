import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import '../style/index.css';

import InitialScreen from './pages/InitialScreen';
import PageNotFound from './pages/PageNotFound';
import Sites from './pages/Sites';
import Navbar from './components/Navbar';
import Site from './pages/Site';
import Footer from './components/Footer';

const routes = [
  {
    title: 'Create Site',
    path: '/create-site',
  },
  {
    title: 'Sites',
    path: '/sites',
  },
];

function App() {
  return (
    <div className="estimate-system">
      <Navbar routes={routes} />
      <main className="main-screen">
        <Switch>
          <Route exact path="/create-site" component={InitialScreen} />
          <Redirect exact from="/" to="/create-site" />
          <Route exact path="/sites" component={Sites} />
          <Route exact path="/404" component={PageNotFound} />
          <Route path="/site/:id" component={Site} />
          <Redirect from="*" to="/404" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
