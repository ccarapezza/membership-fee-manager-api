module.exports = (sequelize, Sequelize) => {
  const MemberType = sequelize.define("memberTypes", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return MemberType;
};
