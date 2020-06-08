const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  origin: "localHost:9001",
};

app.use(cors(corsOptions));
const db = require("./app/models");
db.sequelize.sync();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.json({ message: "Sample sequel Crud" });
});

require("./app/routes/employee.routes")(app);

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
