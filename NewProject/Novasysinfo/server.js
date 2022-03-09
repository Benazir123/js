const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
const db = require("./app/models")

// parse requests of content-type - application/json
app.use(express.json());
require("./app/routes/routes")(app);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Novastrid." });
});
app.post('/',)
// set port, listen for requests
const PORT = process.env.PORT || 3000;
//app.listen(PORT);

app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
