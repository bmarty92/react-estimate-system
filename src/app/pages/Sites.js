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
        <Button
          type="button"
          onClick={() => history.push(`/site/${project.id}`)}
          key={index}
        >{`${project.name}, ${project.address}`}</Button>
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
