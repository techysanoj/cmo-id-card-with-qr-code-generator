// src/components/EmployeeForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    id: '',
    designation: '',
    phone: '',
    dob: '',
    address: '',
    aadhar: '',
    bloodGroup: '',
    permanentAddress: '',
    photo: null,
    cardHolderSignature: null,
    authoritySignature: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setEmployee({ ...employee, photo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleCardHolderSignatureChange = (e) => {
    setEmployee({ ...employee, cardHolderSignature: URL.createObjectURL(e.target.files[0]) });
  };

  const handleAuthoritySignatureChange = (e) => {
    setEmployee({ ...employee, authoritySignature: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/id-card', { state: { employee } });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={employee.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={employee.id} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="designation">Designation:</label>
        <input type="text" id="designation" name="designation" value={employee.designation} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={employee.phone} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="dob">DOB:</label>
        <input type="date" id="dob" name="dob" value={employee.dob} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Office Address:</label>
        <input type="text" id="address" name="address" value={employee.address} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="aadhar">Aadhar Number:</label>
        <input type="text" id="aadhar" name="aadhar" value={employee.aadhar} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="bloodGroup">Blood Group:</label>
        <input type="text" id="bloodGroup" name="bloodGroup" value={employee.bloodGroup} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="permanentAddress">Permanent Address:</label>
        <input type="text" id="permanentAddress" name="permanentAddress" value={employee.permanentAddress} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="cardHolderSignature">Card Holder Signature:</label>
        <input type="file" id="cardHolderSignature" name="cardHolderSignature" accept="image/*" onChange={handleCardHolderSignatureChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="authoritySignature">Authority Signature:</label>
        <input type="file" id="authoritySignature" name="authoritySignature" accept="image/*" onChange={handleAuthoritySignatureChange} required />
      </div>
      <button type="submit">Generate ID Card</button>
    </form>
  );
};

export default EmployeeForm;
