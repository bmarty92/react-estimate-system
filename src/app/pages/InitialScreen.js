import React from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';

function InitialScreen() {
  return (
    <div className="initial-screen">
      <h3 className="initial-screen__title">Insert initial site info</h3>
      <form className="initial-screen__data-form">
        <InputField placeholder="Object Name" />
        <InputField placeholder="Object Address" />
        <InputField placeholder="Company Name" />
        <InputField placeholder="Responsible Person" />
        <Button />
      </form>
    </div>
  );
}

export default InitialScreen;
