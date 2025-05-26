import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    repeat_email: '',
    phone: ''
  });

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setStatus(null);

    const { first_name, last_name, email, repeat_email, phone } = formData;

    // Validaciones
    if (!first_name || !last_name || !email || !repeat_email || !phone) {
      setMessage('❌ All fields are required.');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('❌ Email format is invalid.');
      setStatus('error');
      return;
    }

    if (email !== repeat_email) {
      setMessage('❌ Emails do not match.');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          phone
        })
      });

      if (!response.ok) throw new Error('Request failed');

      setMessage('✅ User created successfully');
      setStatus('success');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        repeat_email: '',
        phone: ''
      });
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to create user');
      setStatus('error');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="bg-dark text-white p-5 rounded shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Create New User</h2>

        {message && (
          <div className={`alert ${status === 'success' ? 'alert-success' : 'alert-danger'} text-center`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="first_name"
              className="form-control"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Repeat Email</label>
            <input
              type="email"
              name="repeat_email"
              className="form-control"
              value={formData.repeat_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            <i className="bi bi-person-plus me-2"></i>Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


