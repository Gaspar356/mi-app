import { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newGame, setNewGame] = useState({ title: '', category: '', image: '' });
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    fetchGames();
    fetchCategories();
  }, []);

  const fetchGames = async () => {
    const res = await fetch('http://localhost:4000/games');
    const data = await res.json();
    setGames(data);
  };

  const fetchCategories = async () => {
    const res = await fetch('http://localhost:4000/categories');
    const data = await res.json();
    setCategories(data);
  };

  const handleGameChange = (e) => {
    setNewGame(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddGame = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4000/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGame)
    });
    setNewGame({ title: '', category: '', image: '' });
    fetchGames();
  };

  const handleUpdateGame = async (id, updatedGame) => {
    await fetch(`http://localhost:4000/games/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGame)
    });
    fetchGames();
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4000/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newCategory })
    });
    setNewCategory('');
    fetchCategories();
  };

  return (
    <div className="container mt-5 text-white">
      <h2>Admin Panel</h2>

      <section className="mb-4">
        <h4>Add New Game</h4>
        <form onSubmit={handleAddGame} className="mb-3">
          <input type="text" name="title" value={newGame.title} onChange={handleGameChange} placeholder="Title" className="form-control mb-2" required />
          <select name="category" value={newGame.category} onChange={handleGameChange} className="form-control mb-2" required>
            <option value="">Select Category</option>
            {categories.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
          </select>
          <input type="text" name="image" value={newGame.image} onChange={handleGameChange} placeholder="Image URL" className="form-control mb-2" required />
          <button type="submit" className="btn btn-success">Add Game</button>
        </form>
      </section>

      <section className="mb-4">
        <h4>Add New Category</h4>
        <form onSubmit={handleAddCategory} className="mb-3">
          <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Category name" className="form-control mb-2" required />
          <button type="submit" className="btn btn-primary">Add Category</button>
        </form>
      </section>

      <section>
        <h4>Manage Games</h4>
        {games.map(game => (
          <div key={game.id} className="border p-3 mb-3 bg-secondary rounded">
            <input
              type="text"
              value={game.title}
              onChange={(e) => setGames(prev => prev.map(g => g.id === game.id ? { ...g, title: e.target.value } : g))}
              className="form-control mb-2"
            />
            <input
              type="text"
              value={game.category}
              onChange={(e) => setGames(prev => prev.map(g => g.id === game.id ? { ...g, category: e.target.value } : g))}
              className="form-control mb-2"
            />
            <input
              type="text"
              value={game.image}
              onChange={(e) => setGames(prev => prev.map(g => g.id === game.id ? { ...g, image: e.target.value } : g))}
              className="form-control mb-2"
            />
            <button onClick={() => handleUpdateGame(game.id, game)} className="btn btn-warning">Update</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AdminPanel;
