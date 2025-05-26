module.exports = (sequelize, DataTypes) => {
  const GameImage = sequelize.define('GameImage', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, autoIncrement: true
     },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  }, {
    timestamps: false
  });

  return GameImage;
};
