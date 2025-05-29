import { useState, useEffect } from 'react';

const useAdminData = () => {
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

  return {
    games,
    categories,
    newGame,
    newCategory,
    setNewGame,
    setNewCategory,
    fetchGames,
    handleGameChange,
    handleAddGame,
    handleUpdateGame,
    handleAddCategory,
    setGames
  };
};

export default useAdminData;
