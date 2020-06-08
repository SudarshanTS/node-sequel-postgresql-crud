const db = require("../models");
const Employee = db.employees;
exports.create = (req, res) => {
  const data = req.body;
  if (!data.email || data.email === null) {
    res.status(400).send({
      message: "Email not be empty!",
    });
    return;
  }
  if (!data.roleNo) {
    res.status(400).send({
      message: "Role number can not be empty!",
    });
    return;
  }
  const employee = {
    name: data.name,
    email: data.email,
    role_number: data.roleNo,
  };
  Employee.create(employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the employee.",
      });
    });
};

exports.findAll = (req, res) => {
  Employee.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Employee.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Employee.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully.",
        });
      } else {
        res.send({
          message: "Cannot update the Employee.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error on updateing Employee",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Employee.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Employee Deleted Successfully",
        });
      } else {
        res.send({
          message: "Cannot delete the Employee",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete",
      });
    });
};
