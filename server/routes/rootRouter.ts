import { Router } from "express";
import routerToCustomers from "./customerRoute";
import routerToLogin from "./loginRoute";
import routerToWallet from "./walletRoute";

let router = Router();
router.use("/", routerToLogin, routerToWallet, routerToCustomers);
export default router;
