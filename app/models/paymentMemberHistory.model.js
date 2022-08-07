module.exports = (sequelize, Sequelize) => {
  const PaymentMemberHistory = sequelize.define("paymentMemberHistories", {
    feeNumber: {
      type: Sequelize.INTEGER
    },
  });
  

  return PaymentMemberHistory;
};