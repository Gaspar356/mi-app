module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    has_offer: DataTypes.BOOLEAN,
    discount_percentage: DataTypes.FLOAT,
    base_price: DataTypes.FLOAT,
    category_id: DataTypes.INTEGER,
  });

  Game.associate = (models) => {
    Game.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'Category',
    });

    Game.hasMany(models.GameImage, {
      foreignKey: 'game_id',
      as: 'images',
      onDelete: 'CASCADE',
    });
  };

  return Game;
};
