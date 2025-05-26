require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

const User = require('./user')(sequelize, DataTypes);
const Category = require('./category')(sequelize, DataTypes);
const Game = require('./game')(sequelize, DataTypes);
const Purchase = require('./purchase')(sequelize, DataTypes);
const PurchaseGame = require('./purchaseGame')(sequelize, DataTypes);
const GameImage = require('./gameImage')(sequelize, DataTypes);


Category.hasMany(Game, { foreignKey: 'category_id' });
Game.belongsTo(Category, { foreignKey: 'category_id' });

Game.hasMany(GameImage, { foreignKey: 'game_id' });
GameImage.belongsTo(Game, { foreignKey: 'game_id' });

User.hasMany(Purchase, { foreignKey: 'user_id' });
Purchase.belongsTo(User, { foreignKey: 'user_id' });

Purchase.belongsToMany(Game, {
  through: PurchaseGame,
  foreignKey: 'purchase_id'
});
Game.belongsToMany(Purchase, {
  through: PurchaseGame,
  foreignKey: 'game_id'
});

module.exports = {
  sequelize,
  User,
  Category,
  Game,
  Purchase,
  PurchaseGame,
  GameImage
};