const routerToLogin = require("./routes/loginRoute");
const routerToWallet = require("./routes/walletRoute");
const routerToCustomers = require("./routes/customerRoute");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

//create server
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
//Variables

app.use("/", routerToLogin, routerToWallet, routerToCustomers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
