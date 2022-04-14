import { Router } from "express";
import { WalletController } from "../controllers/WalletController";
const walletURL = process.env.WALLET_URL;
const routerToWallet = Router();

routerToWallet.post("/wallet", async function (req, res) {
  const token = req.headers["authorization"];
  const body = req.body;
  const walletController = new WalletController(token, walletURL, body);
  const getResponse = async () => await walletController.getWalletAmount();
  const response = await getResponse();

  res.json(response);
});
export default routerToWallet;
