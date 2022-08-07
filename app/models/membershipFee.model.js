module.exports = (sequelize, Sequelize) => {
  const MembershipFee = sequelize.define("membershipFees", {
    year: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.DECIMAL(12,2),
    },
  });
  

  return MembershipFee;
};