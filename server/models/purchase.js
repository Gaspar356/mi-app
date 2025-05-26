module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL(10, 2)
  }, {
    timestamps: false
  });

  return Purchase;
};
