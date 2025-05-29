import GameForm from './gameform';
import CategoryForm from './categoryform';
import GameCard from './gamecard';
import useAdminData from './hooks';
import { useEffect, useState } from 'react';

const AdminPanel = () => {
  const {
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
  } = useAdminData();

  const [activeGames, setActiveGames] = useState(false);
  const [activeCategories, setActiveCategories] = useState(false);

   useEffect(() => {
    if (activeGames) {
      setActiveCategories(false);
    } else if (activeCategories) {
      setActiveGames(false);
    }
  }, [activeGames, activeCategories]);

  return (
    <div className="container mt-5 text-white">
      <h2>Admin Panel</h2>

      <ul>
        <li>
          <button
            className="btn btn-primary"
            onClick={() => setActiveGames(true)}
          >
            Juegos
          </button>
        </li>
        <li>
          <button
            className="btn btn-primary"
            onClick={() => setActiveCategories(true)}
          >
            Categorías
          </button>
        </li>
      </ul>

      {activeGames && (
        <div>
          <section className="mb-4">
            <h4>Add New Game</h4>
            <GameForm
              newGame={newGame}
              categories={categories}
              handleGameChange={handleGameChange}
              handleAddGame={handleAddGame}
            />
          </section>
          <section>
            <h4>Manage Games</h4>
            {games.map(game => (
              <GameCard
                key={game.id}
                game={game}
                setGames={setGames}
                handleUpdateGame={handleUpdateGame}
              />
            ))}
          </section>
        </div>
      )}

      {activeCategories && (
        <section className="mb-4">
          <h4>Add New Category</h4>
          <CategoryForm
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            handleAddCategory={handleAddCategory}
          />
        </section>
      )}

    </div>
  );
};

export default AdminPanel;
