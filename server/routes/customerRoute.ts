import { Router } from "express";
import { CustomerAgent } from "../models/CustomersAgent/CustomerAgent";
const routerToCustomers = Router();

routerToCustomers.get("/customers/all", async function (req, res) {
  const token = req.headers["authorization"];
  const url = process.env.GET_CUSTOMERS_URL;
  const customerAgent = new CustomerAgent(token, url);
  const getResponse = async () => await customerAgent.getCustomers();
  const response = await getResponse();

  res.json(response);
});
export default routerToCustomers;
