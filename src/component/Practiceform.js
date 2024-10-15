import axios from 'axios';
import React, { useState } from 'react';

const ContactForm = () => {
          const submitHandler =(event)=>{
                    event.preventDefault();
                    const email= event.target.email.value;
                    const password= event.target.password.value;
                    const address= event.target.address.value;
                    const address2= event.target.address2.value;
                    const city= event.target.city.value;
                    const state= event.target.state.value;
                    const zip= event.target.zip.value;
                    const checked= event.target.checked.value;
                    const data ={email,password,address,address2,city,state,zip,checked};
                    axios.post("http://172.105.55.211/TestApi/contactApi.php?type=getContact", data)
                    .then(response =>{
                              console.log(response); 
                              event.target.reset();  
                    })
                    .catch(error => {
                              console.log(error);
                    });
          }

  return (
    <form className="row g-3" onSubmit={submitHandler}>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          name="address"
          value={formData.address}
          placeholder="1234 Main St"
          onChange={handleChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          name="address2"
          value={formData.address2}
          placeholder="Apartment, studio, or floor"
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select
          id="inputState"
          className="form-select"
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="" disabled>Choose...</option>
          <option value="...">...</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input
          type="text"
          className="form-control"
          id="inputZip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck"
            name="checked"
            checked={formData.checked}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
  );
};

export default ContactForm;
