module.exports = (sequelize, Sequelize) => {
  const MemberType = sequelize.define("memberTypes", {
    name: {
      type: Sequelize.STRING
    }
  });

  return MemberType;
};
