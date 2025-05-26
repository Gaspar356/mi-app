module.exports = (sequelize, DataTypes) => {
  const GameImage = sequelize.define('GameImage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  GameImage.associate = (models) => {
    GameImage.belongsTo(models.Game, {
      foreignKey: 'game_id',
      as: 'game',
      onDelete: 'CASCADE',
    });
  };

  return GameImage;
};
