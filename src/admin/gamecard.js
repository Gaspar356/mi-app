const GameCard = ({ game, setGames, handleUpdateGame }) => (
  <div className="border p-3 mb-3 bg-secondary rounded">
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
);

export default GameCard;
