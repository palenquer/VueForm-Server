const { Router } = require("express");
const  user  = require("./models/user");

const routes = Router();

routes.post("/users", (request, response) => {
  const { name, email , password, confirmPassword, terms } = request.body;
  user.create({
    name,
    email,
    password,
    confirmPassword,
    terms,
  });
  return response.json(request.body.name);
});

module.exports = routes;
