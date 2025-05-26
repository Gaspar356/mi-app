import { useEffect, useState } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const res = await fetch('http://localhost:4000/games');
      const data = await res.json();
      setGames(data);
    } catch (err) {
      console.error('Error fetching games', err);
    }
  };

  const deleteGame = async (id) => {
    if (!window.confirm('Are you sure you want to delete this game?')) return;

    try {
      await fetch(`http://localhost:4000/games/${id}`, { method: 'DELETE' });
      setGames(prev => prev.filter(game => game.id !== id));
    } catch (err) {
      console.error('Error deleting game', err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="bg-dark p-4 rounded shadow">
      <h4>Existing Games</h4>
      {games.length === 0 ? (
        <p className="text-muted">No games found.</p>
      ) : (
        <ul className="list-group mt-3">
          {games.map(game => (
            <li key={game.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{game.title}</strong> - {game.category}
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => deleteGame(game.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameList;
