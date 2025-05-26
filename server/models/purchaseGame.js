module.exports = (sequelize, DataTypes) => {
  const PurchaseGame = sequelize.define('PurchaseGame', {
    purchase_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    game_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    timestamps: false
  });

  return PurchaseGame;
};
