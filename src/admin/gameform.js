import { useState } from 'react';

const GameForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:4000/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed');

      setMessage('✅ Game created successfully');
      setFormData({ title: '', category: '', image: '', description: '' });
    } catch (err) {
      console.error(err);
      setMessage('❌ Error creating game');
    }
  };

  return (
    <div className="bg-dark p-4 rounded shadow">
      <h4>Add New Game</h4>
      {message && <div className="alert alert-info mt-2">{message}</div>}

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" className="form-control" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input name="category" className="form-control" value={formData.category} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input name="image" className="form-control" value={formData.image} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} rows={3} />
        </div>

        <button type="submit" className="btn btn-success w-100">Save Game</button>
      </form>
    </div>
  );
};

export default GameForm;
