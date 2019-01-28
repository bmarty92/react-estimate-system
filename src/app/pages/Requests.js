import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import MechanismRequest from '../components/MechanismRequest';
import MaterialRequest from '../components/MaterialRequest';
import Notes from '../components/Notes';
import InputField from '../components/InputField';
import Button from '../components/Button';
import TextArea from '../components/TextArea';

import sites from '../../sites';

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mechanismNote: 'Add Note',
      materialNote: 'Add Note',
      note: 'Add Note',
    };
  }

  addMechanismRequest = event => {
    event.preventDefault();
    const { addMechanismRequests, match } = this.props;
    const { mechanismNote } = this.state;
    const payload = {
      date: event.target.date.value,
      name: event.target.name.value,
      note: mechanismNote,
    };
    addMechanismRequests(payload, match.params.id);
  };

  addMaterialRequest = event => {
    event.preventDefault();
    const { addMaterialRequests, match } = this.props;
    const { materialNote } = this.state;
    const payload = {
      date: event.target.date.value,
      name: event.target.name.value,
      dimension: event.target.dimension.value,
      quantity: event.target.quantity.value,
      note: materialNote,
    };
    addMaterialRequests(payload, match.params.id);
  };

  addNote = event => {
    event.preventDefault();
    const { addNotes, match } = this.props;
    const { note } = this.state;
    const payload = {
      date: event.target.date.value,
      name: event.target.name.value,
      message: note,
    };
    addNotes(payload, match.params.id);
  };

  setMechNote = event => {
    event.preventDefault();
    this.setState({ mechanismNote: event.target.value });
  };

  setMaterialNote = event => {
    event.preventDefault();
    this.setState({ materialNote: event.target.value });
  };

  setNote = event => {
    event.preventDefault();
    this.setState({ note: event.target.value });
  };

  render() {
    const { mechanismsRequest, materialRequest, notes } = this.props;
    const { mechanismNote, materialNote, note } = this.state;
    return (
      <React.Fragment>
        <div className="request-screen">
          <div className="mechanism-request-screen">
            <form
              className="mechanism-request-screen__data-form"
              onSubmit={this.addMechanismRequest}
            >
              <h3 className="mechanism-request-screen__title">
                Insert Mechanism request info
              </h3>
              <InputField
                type="date"
                placeholder="Providing date"
                name="date"
              />
              <InputField placeholder="Mechanism name" name="name" />
              <TextArea
                placeholder="Notes"
                name="notes"
                rows={5}
                value={mechanismNote}
                onChange={this.setMechNote}
              />
              <Button type="submit">Submit Entry</Button>
            </form>
            {!!mechanismsRequest.length && (
              <div className="mechanismRequests">
                <MechanismRequest mechanismsRequest={mechanismsRequest} />
              </div>
            )}
          </div>

          <div className="material-request-screen">
            <form
              className="material-request-screen__data-form"
              onSubmit={this.addMaterialRequest}
            >
              <h3 className="material-request-screen__title">
                Insert Material request info
              </h3>
              <InputField
                type="date"
                placeholder="Providing date"
                name="date"
              />
              <InputField type="text" placeholder="Material name" name="name" />
              <InputField
                type="text"
                placeholder="Material dimension"
                name="dimension"
              />
              <InputField
                type="number"
                placeholder="Material quantity"
                name="quantity"
              />
              <TextArea
                placeholder="Notes"
                name="notes"
                rows={5}
                value={materialNote}
                onChange={this.setMaterialNote}
              />
              <Button type="submit">Submit Entry</Button>
            </form>
            {!!materialRequest.length && (
              <div className="materialRequests">
                <MaterialRequest materialRequest={materialRequest} />
              </div>
            )}
          </div>

          <div className="notes-screen">
            <form className="notes-screen__data-form" onSubmit={this.addNote}>
              <h3 className="notes-screen__title">Additional notes</h3>
              <InputField type="date" placeholder="Date" name="date" />
              <InputField type="text" placeholder="Name" name="name" />
              <TextArea
                placeholder="Notes"
                name="note"
                rows={5}
                value={note}
                onChange={this.setNote}
              />
              <Button type="submit">Submit Entry</Button>
            </form>
            {!!notes.length && (
              <div className="notes">
                <Notes notes={notes} />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Requests.propTypes = {
  addNotes: PropTypes.func.isRequired,
  addMaterialRequests: PropTypes.func.isRequired,
  addMechanismRequests: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  mechanismsRequest: PropTypes.arrayOf({}).isRequired,
  materialRequest: PropTypes.arrayOf({}).isRequired,
  notes: PropTypes.arrayOf({}).isRequired,
};

const enhance = connect(
  (state, props) => ({
    mechanismsRequest: sites.selectors.getMechanismRequestsId(
      state,
      props.match.params.id
    ),
    materialRequest: sites.selectors.getMaterialRequestId(
      state,
      props.match.params.id
    ),
    notes: sites.selectors.getNotesId(state, props.match.params.id),
  }),
  dispatch =>
    bindActionCreators(
      {
        addMaterialRequests: sites.actions.addMaterialRequests,
        addMechanismRequests: sites.actions.addMechanismRequests,
        addNotes: sites.actions.addNotes,
      },
      dispatch
    )
);
export default enhance(Requests);
