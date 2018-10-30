import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import '../style/index.css';

import EstimatePage from './pages/EstimatePage';
import InitialScreen from './pages/InitialScreen';
import Mechanisms from './pages/Mechanisms';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Payment';
import Requests from './pages/Requests';
import Sites from './pages/Sites';
import WeekSchedule from './pages/WeekSchedule';
import Navbar from './components/Navbar';

const ROUTES = [
  'Initial Screen',
  'Estimate Page',
  'Week Schedule',
  'Mechanisms',
  'Payment',
  'Requests',
  'Sites',

];

class App extends React.Component {
  render() {
    return (
      <div className="estimate-system">
        <Navbar routes={ROUTES} changeRoute={this.changeRoute} />
        <div>
          <Switch>
            <Route exact path="/Initial Screen" component={InitialScreen} />
            <Redirect exact from="/" to="/Initial Screen" />
            <Route exact path="/Sites" component={Sites} />
            <Route exact path="/Estimate Page" component={EstimatePage} />
            <Route exact path="/Week Schedule" component={WeekSchedule} />
            <Route exact path="/Mechanisms" component={Mechanisms} />
            <Route exact path="/Payment" component={Payment} />
            <Route exact path="/Requests" component={Requests} />
            <Route exact path="/404" component={PageNotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
