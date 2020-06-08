module.exports = (app) => {
  const employee = require("../controllers/employee.controller.js");

  var router = require("express").Router();
  router.post("/createEmp", employee.create);
  router.get("/getAllEmp", employee.findAll);
  router.get("/getEmpById/:id", employee.findOne);
  router.put("/updateEmp/:id", employee.update);
  router.delete("/deleteEmp/:id", employee.delete);

  app.use("/", router);
};
