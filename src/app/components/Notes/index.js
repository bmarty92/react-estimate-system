import React from 'react';
import PropTypes from 'prop-types';

import NotesRow from './NotesRow';

function Notes(props) {
  const { notes } = props;
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {notes.map(note => (
          <NotesRow note={note} />
        ))}
      </tbody>
    </table>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf({}).isRequired,
};

export default Notes;
