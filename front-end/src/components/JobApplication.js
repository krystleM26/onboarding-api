import React, { useState } from 'react'

const JobApplication = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: null,
      });

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume' || name === 'coverLetter') {
          setFormData({ ...formData, resume: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('resume', formData.resume);
        form.append('coverLetter', formData.coverLetter);
        
        try {
          const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            body: form,
          });
          const result = await response.json();
          if (response.ok) {
            alert('Application submitted successfully!');
          } else {
            alert('Error: ' + result.message);
          }
        } catch (error) {
          alert('Failed to submit application. Please try again later.');
        }
      };
  

  return (
    <>
    
  
    <h1>Job Application Form</h1>
    <form onSubmit={handleSubmit}>
    <div>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    </div>

    <div>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    </div>

    <div>
      <label>Phone:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
    </div>

    <div>
      <label>Resume:</label>
      <input type="file" name="resume" onChange={handleChange} required />
    </div>

    <div>
      <label>Cover Letter:</label>
      <input type='file' name="coverLetter"  onChange={handleChange} required />
    </div>

    <button type="submit">Submit Application</button>
  </form>
  </>      
 
  )

}

export default JobApplication