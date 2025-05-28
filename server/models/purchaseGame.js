module.exports = (sequelize, DataTypes) => {
  const PurchaseGame = sequelize.define('PurchaseGame', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    purchase_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price_at_purchase: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'PurchaseGames',
    underscored: true
  });

  PurchaseGame.associate = models => {
    PurchaseGame.belongsTo(models.Purchase, {
      foreignKey: 'purchase_id',
      as: 'purchase'
    });

    PurchaseGame.belongsTo(models.Game, {
      foreignKey: 'game_id',
      as: 'game'
    });
  };

  return PurchaseGame;
};