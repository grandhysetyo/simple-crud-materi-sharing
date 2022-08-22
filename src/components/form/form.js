import React from 'react';

const Form = (props) => {
  return (
    <form className="form">
      <h2>Form</h2>
      <fieldset>
        <input name='name' placeholder="Employee Name" type="text" tabIndex="1" required autoFocus value={props.value.name} onChange={(e) => props.onchange(e)} />
      </fieldset>
      <fieldset>
        <input name='email' placeholder="Email Address" type="email" tabIndex="2" required value={props.value.email} onChange={(e) => props.onchange(e)} />
      </fieldset>
      <fieldset>
        <input name='phonenumber' placeholder="Phone Number" type="tel" tabIndex="3" required value={props.value.phonenumber} onChange={(e) => props.onchange(e)} />
      </fieldset>        
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={(e) => props.onsubmit(e)}>Submit</button>
      </fieldset>        
    </form>
  );
};

export default Form;