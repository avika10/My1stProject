
import React, { useState } from "react";

// const About = () => {

const JobApplicationForm = () => {
 
   
     <div>this is about</div>

      const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    highSchool: "",
    university: "",
    degree: "",
    graduationYear: "",
  });

  // State to track current step
  const [step, setStep] = useState(1);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (final step)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // You can add further submission logic here (e.g., API calls)
    alert("Application submitted successfully!");
  };

  // Handle navigation between steps
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <h2>Job Application Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Login Page */}
        {step === 1 && (
          <div>
            <h3>Login</h3>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <div>
            <h3>Personal Information</h3>
            <div>
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={prevStep}>
              Back
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {/* Step 3: Academic Qualifications */}
        {step === 3 && (
          <div>
            <h3>Academic Qualifications</h3>
            <div>
              <label>High School:</label>
              <input
                type="text"
                name="highSchool"
                value={formData.highSchool}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>University:</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Degree:</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Graduation Year:</label>
              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" onClick={prevStep}>
              Back
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

   
 

export default JobApplicationForm
