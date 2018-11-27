import React from 'react';
import NotesRow from './NotesRow';

function Notes(props) {
  const { notes } = props;
  return (
    <table className="notes">
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

export default Notes
