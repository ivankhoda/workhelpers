import { LoginController } from "../controllers/loginController";
const trustor = process.env.TRUSTOR;
const routerToLogin = require("express").Router();

routerToLogin.post("/login", async function (req, res) {
  const { login, password } = req.body;
  const loginController = new LoginController(login, password, trustor);
  const getResponse = async () => await loginController.getToken();
  const response = await getResponse();
  res.json({ data: response });
});
module.exports = routerToLogin;
