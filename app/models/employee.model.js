
module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employees", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    role_number: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  });

  return Employee;
};
