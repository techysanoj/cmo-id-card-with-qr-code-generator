// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './EmployeeForm.css';

// const EmployeeForm = () => {
//   const [employee, setEmployee] = useState({
//     name: '',
//     id: '',
//     designation: '',
//     phone: '',
//     dob: '',
//     address: '',
//     aadhar: '',
//     bloodGroup: '',
//     permanentAddress: '',
//     photo: null,
//     cardHolderSignature: null,
//     authoritySignature: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const handlePhotoChange = (e) => {
//     setEmployee({ ...employee, photo: URL.createObjectURL(e.target.files[0]) });
//   };

//   const handleCardHolderSignatureChange = (e) => {
//     setEmployee({ ...employee, cardHolderSignature: URL.createObjectURL(e.target.files[0]) });
//   };

//   const handleAuthoritySignatureChange = (e) => {
//     setEmployee({ ...employee, authoritySignature: URL.createObjectURL(e.target.files[0]) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/id-card', { state: { employee } });
//   };

//   return (
//     <div className="employee-form-container">
//       <form onSubmit={handleSubmit} className="employee-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" value={employee.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="id">ID:</label>
//           <input type="text" id="id" name="id" value={employee.id} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="designation">Designation:</label>
//           <input type="text" id="designation" name="designation" value={employee.designation} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input type="text" id="phone" name="phone" value={employee.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="dob">DOB:</label>
//           <input type="date" id="dob" name="dob" value={employee.dob} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Office Address:</label>
//           <input type="text" id="address" name="address" value={employee.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="aadhar">Aadhar Number:</label>
//           <input type="text" id="aadhar" name="aadhar" value={employee.aadhar} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="bloodGroup">Blood Group:</label>
//           <select id="bloodGroup" name="bloodGroup" value={employee.bloodGroup} onChange={handleChange} required>
//             <option value="">Select Blood Group</option>
//             <option value="O+">O+</option>
//             <option value="A+">A+</option>
//             <option value="B+">B+</option>
//             <option value="AB+">AB+</option>
//             <option value="O-">O-</option>
//             <option value="A-">A-</option>
//             <option value="B-">B-</option>
//             <option value="AB-">AB-</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="permanentAddress">Permanent Address:</label>
//           <input type="text" id="permanentAddress" name="permanentAddress" value={employee.permanentAddress} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="photo">Photo:</label>
//           <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cardHolderSignature">Card Holder Signature:</label>
//           <input type="file" id="cardHolderSignature" name="cardHolderSignature" accept="image/*" onChange={handleCardHolderSignatureChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="authoritySignature">Authority Signature:</label>
//           <input type="file" id="authoritySignature" name="authoritySignature" accept="image/*" onChange={handleAuthoritySignatureChange} required />
//         </div>
//         <button type="submit">Generate ID Card</button>
//       </form>
//     </div>
//   );
// };

// export default EmployeeForm;



// src/components/EmployeeForm.jsx
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

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({ ...employee, photo: URL.createObjectURL(file) });
    }
  };

  const handleCardHolderSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({ ...employee, cardHolderSignature: URL.createObjectURL(file) });
    }
  };

  const handleAuthoritySignatureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({ ...employee, authoritySignature: URL.createObjectURL(file) });
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      navigate('/id-card', { state: { employee } });
    }, 2000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return employee.name && employee.id && employee.designation && employee.phone && employee.dob;
      case 2:
        return employee.address && employee.aadhar && employee.bloodGroup && employee.permanentAddress;
      case 3:
        return employee.photo && employee.cardHolderSignature && employee.authoritySignature;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3 className="step-title">Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id">Employee ID *</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={employee.id}
                  onChange={handleChange}
                  placeholder="Enter employee ID"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="designation">Designation *</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={employee.designation}
                  onChange={handleChange}
                  placeholder="Enter your designation"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Mobile Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={employee.phone}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth *</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={employee.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h3 className="step-title">Address & Additional Details</h3>
            <div className="form-group">
              <label htmlFor="address">Office Address *</label>
              <textarea
                id="address"
                name="address"
                value={employee.address}
                onChange={handleChange}
                placeholder="Enter office address"
                rows="3"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="permanentAddress">Permanent Address *</label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={employee.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
                rows="3"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="aadhar">Aadhar Number *</label>
                <input
                  type="text"
                  id="aadhar"
                  name="aadhar"
                  value={employee.aadhar}
                  onChange={handleChange}
                  placeholder="Enter 12-digit Aadhar number"
                  maxLength="12"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group *</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={employee.bloodGroup}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="O+">O+</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O-">O-</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h3 className="step-title">Upload Documents</h3>
            <div className="upload-section">
              <div className="upload-group">
                <label htmlFor="photo">Profile Photo *</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    required
                  />
                  <div className="file-upload-display">
                    {employee.photo ? (
                      <img src={employee.photo} alt="Profile" className="preview-image" />
                    ) : (
                      <div className="upload-placeholder">
                        <div className="upload-icon">📷</div>
                        <p>Upload Photo</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="upload-group">
                <label htmlFor="cardHolderSignature">Card Holder Signature *</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="cardHolderSignature"
                    name="cardHolderSignature"
                    accept="image/*"
                    onChange={handleCardHolderSignatureChange}
                    required
                  />
                  <div className="file-upload-display">
                    {employee.cardHolderSignature ? (
                      <img src={employee.cardHolderSignature} alt="Signature" className="preview-image" />
                    ) : (
                      <div className="upload-placeholder">
                        <div className="upload-icon">✍️</div>
                        <p>Upload Signature</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="upload-group">
                <label htmlFor="authoritySignature">Authority Signature *</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="authoritySignature"
                    name="authoritySignature"
                    accept="image/*"
                    onChange={handleAuthoritySignatureChange}
                    required
                  />
                  <div className="file-upload-display">
                    {employee.authoritySignature ? (
                      <img src={employee.authoritySignature} alt="Authority Signature" className="preview-image" />
                    ) : (
                      <div className="upload-placeholder">
                        <div className="upload-icon">🏛️</div>
                        <p>Upload Authority Signature</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="employee-form-container">
      <div className="form-header">
        <h1>ID Card Generator</h1>
        <p>Create professional ID cards for government employees</p>
      </div>
      
      <div className="progress-bar">
        <div className="progress-steps">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`progress-step ${currentStep >= step ? 'active' : ''}`}
            >
              <div className="step-number">{step}</div>
              <span className="step-label">
                {step === 1 ? 'Personal' : step === 2 ? 'Details' : 'Documents'}
              </span>
            </div>
          ))}
        </div>
        <div
          className="progress-fill"
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        ></div>
      </div>

      <form onSubmit={handleSubmit} className="employee-form">
        {renderStep()}
        
        <div className="form-navigation">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrev} className="btn btn-secondary">
              Previous
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
              disabled={!isStepValid()}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isStepValid() || isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Generating...
                </>
              ) : (
                'Generate ID Card'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;