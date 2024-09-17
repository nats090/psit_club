import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    emailjs.send('service_4piqhav', 'template_8w996kr', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, 'bxREh_HlNUfkOl9po')
      .then((response) => {
        console.log('Email successfully sent!', response);
        setSuccess('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }, (err) => {
        console.error('Failed to send email. Error: ', err);
        setError('Failed to send your message. Please try again.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>You can reach us via the following information:</p>
      <ul>
        <li><strong>Email:</strong> contact@psitclub.com</li>
        <li><strong>Phone:</strong> +1 234 567 890</li>
        <li><strong>Location:</strong> 1234 PSIT Club Avenue, City, Country</li>
      </ul>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
