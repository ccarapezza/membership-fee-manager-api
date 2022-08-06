const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        pool: {
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle,
        },
      })
    : new Sequelize(config.DB, config.USER, config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle,
        },
      });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.member = require("../models/member.model.js")(sequelize, Sequelize);
db.memberType = require("../models/memberType.model.js")(sequelize, Sequelize);
db.feeType = require("../models/memberType.model.js")(sequelize, Sequelize);
db.memberType = require("../models/memberType.model.js")(sequelize, Sequelize);
db.lastPaymentMember = require("../models/lastPaymentMember.model.js")(sequelize, Sequelize);
db.member = require("../models/member.model.js")(sequelize, Sequelize);
db.membershipFee = require("../models/membershipFee.model.js")(sequelize, Sequelize);
db.memberType = require("../models/memberType.model.js")(sequelize, Sequelize);
db.paymentMemberHistory = require("../models/paymentMemberHistory.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["member", "admin", "moderator"];

//Member
db.member.belongsTo(db.memberType);
db.member.belongsTo(db.feeType);
db.member.belongsTo(db.user);

//Membership-fee
db.membershipFee.belongsTo(db.memberType);
db.membershipFee.belongsTo(db.feeType);

//Last payment member
db.lastPaymentMember.belongsTo(db.member);
db.lastPaymentMember.belongsTo(db.membershipFee);

//Payment member history
db.lastPaymentMember.belongsTo(db.member);
db.lastPaymentMember.belongsTo(db.membershipFee);

module.exports = db;
