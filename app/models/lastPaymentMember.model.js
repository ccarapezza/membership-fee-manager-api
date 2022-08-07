module.exports = (sequelize, Sequelize) => {
  const LastPaymentMember = sequelize.define("lastPaymentMembers", {
    feeNumber: {
      type: Sequelize.INTEGER
    },
  });

  return LastPaymentMember;
};