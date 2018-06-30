const express = require('express')
const bodyParser = require('body-parser');
const userController = require('./controllers/UserController');

// db instance connection via mongoose
require("./config/db");

const app = express();
const port = process.env.PORT || 3301;

// parse HTTP request before routes, grab req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
    .route("/users")
    .get(userController.listAllUsers)
    .post(userController.createNewUser);

app
    .route("/users/:userid")
    .get(userController.readUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});