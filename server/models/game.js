module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    has_offer: DataTypes.BOOLEAN,
    discount_percentage: DataTypes.DECIMAL(5, 2),
    base_price: DataTypes.DECIMAL(10, 2),
    autoIncrement: true

  }, {
    timestamps: false
  });

  return Game;
};
