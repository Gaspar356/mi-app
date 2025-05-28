module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'Purchases',
    underscored: true
  });

  Purchase.associate = models => {
    Purchase.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });

    Purchase.hasMany(models.PurchaseGame, {
      foreignKey: 'purchase_id',
      as: 'items'
    });
  };

  return Purchase;
};