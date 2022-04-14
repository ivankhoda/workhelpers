import { Router } from "express";
import { LoginController } from "../controllers/loginController";
const trustor = process.env.TRUSTOR;
const routerToLogin = Router();

routerToLogin.post("/login", async function (req, res) {
  const { login, password, platformUrl } = req.body;
  const loginController = new LoginController(login, password, trustor, platformUrl);
  const getResponse = async () => await loginController.getToken();
  const response = await getResponse();
  res.json({ data: response });
});
export default routerToLogin;
