module.exports = (sequelize, Sequelize) => {
  const Member = sequelize.define("members", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    dni: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
  });

  return Member;
};
