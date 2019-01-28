import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EstimatePage from './EstimatePage';
import Mechanisms from './Mechanisms';
import Payment from './Payment';
import Requests from './Requests';
import WeekSchedule from './WeekSchedule';
import Navbar from '../components/Navbar';
import SiteHeader from '../components/SiteHeader';

import sites from '../../sites';

class Site extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      {
        title: 'Estimate',
        path: `/site/${props.match.params.id}/estimate`,
      },
      {
        title: 'Schedule',
        path: `/site/${props.match.params.id}/schedule`,
      },
      {
        title: 'Mechanisms',
        path: `/site/${props.match.params.id}/mechanisms`,
      },
      {
        title: 'Payment',
        path: `/site/${props.match.params.id}/payment`,
      },
      {
        title: 'Requests & Notes',
        path: `/site/${props.match.params.id}/requests`,
      },
    ];
  }

  componentDidMount() {
    const { history, site } = this.props;
    if (!site) {
      history.replace(`/`);
    }
  }

  render() {
    const { site = {} } = this.props;
    return (
      <React.Fragment>
        <SiteHeader tittle={site.name} address={site.address} />
        <Navbar routes={this.routes} />
        <Switch>
          <Route exact path="/site/:id/estimate" component={EstimatePage} />
          <Route exact path="/site/:id/schedule" component={WeekSchedule} />
          <Route exact path="/site/:id/mechanisms" component={Mechanisms} />
          <Route exact path="/site/:id/payment" component={Payment} />
          <Route exact path="/site/:id/requests" component={Requests} />
        </Switch>
      </React.Fragment>
    );
  }
}

Site.propTypes = {
  history: PropTypes.shape({}).isRequired,
  site: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const enhance = connect((state, props) => ({
  site: sites.selectors.getSiteById(state, props.match.params.id),
}));

export default enhance(Site);
