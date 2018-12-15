import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import sites from '../../sites';
import Button from '../components/Button';

function Sites(props) {
  const { projects, history } = props;
  return (
    <div className="sites">
      {projects.map((project, index) => (
        <div className="site">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <h1>Project Name:</h1>
                  <p className="title is-4">{project.name}</p>
                  <p>Address:</p>
                  <p className="subtitle is-6">{project.address}</p>
                  <p>Contractor:</p>
                  <p className="subtitle is-6">{project.company}</p>
                  <p>Responsible person:</p>
                  <p className="subtitle is-6">{project.person}</p>
                </div>
              </div>
            </div>
            <Button
              type="button"
              onClick={() => history.push(`/site/${project.id}`)}
              key={index}
            >
              Select
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

const enhance = compose(
  withRouter,
  connect(state => ({
    projects: sites.selectors.getSites(state),
  }))
);

export default enhance(Sites);
