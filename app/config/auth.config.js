module.exports = {
  secret: process.env.NODE_ENV === "production" ? process.env.SECRET_KEY : "membership-fee-manager-api"
};
