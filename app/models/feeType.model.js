module.exports = (sequelize, Sequelize) => {
  const FeeType = sequelize.define("feeTypes", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    anual_fees_count: {
      type: Sequelize.INTEGER
    },
    payment_enable_prev_days: {
      type: Sequelize.INTEGER
    },
    expiration_after_days: {
      type: Sequelize.INTEGER
    },
    late_payments_interest_percentage: {
      type: Sequelize.INTEGER
    }
  });
  

  return FeeType;
};