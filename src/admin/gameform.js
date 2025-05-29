const GameForm = ({ newGame, categories, handleGameChange, handleAddGame }) => (
  <form onSubmit={handleAddGame} className="mb-3">
    <input
      type="text"
      name="title"
      value={newGame.title}
      onChange={handleGameChange}
      placeholder="Title"
      className="form-control mb-2"
      required
    />
    <select
      name="category"
      value={newGame.category}
      onChange={handleGameChange}
      className="form-control mb-2"
      required
    >
      <option value="">Select Category</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.name}>{cat.name}</option>
      ))}
    </select>
    <input
      type="text"
      name="image"
      value={newGame.image}
      onChange={handleGameChange}
      placeholder="Image URL"
      className="form-control mb-2"
      required
    />
    <button type="submit" className="btn btn-success">Add Game</button>
  </form>
);

export default GameForm;
