import React, { useEffect, useState } from "react";
import { useToken } from "../App/useToken";
import { Customers } from "../Customers/Customers";

type WalletInfo = {
  opening: string;
  debit: string;
  credit: string;
  closing: string;
};
type CustomerProperties = {};
type CustomerInfo = {
  created: string;
  id: string;
  modified: string;
  number: string;
  properties: any[];
  registryId: string;
  state: string;
  type: string;
};
export const Wallet = () => {
  const [wallet, setWallet] = useState<WalletInfo>();
  const [customers, setCustomers] = useState<CustomerInfo[]>([]);
  const { getToken } = useToken();
  useEffect(() => {
    const token = getToken();
    const body = [
      { key: "in_wallet", values: ["true"] },
      { key: "state", values: ["open"] },
      { key: "debitor_id", values: [`CRM105510`] },
    ];

    const getData = async () => {
      const wallet = await fetch("http://localhost:3000/wallet", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const customers = await fetch("http://localhost:3000/customers/all", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        // body: JSON.stringify(body),
      });
      setCustomers(await customers.json());
      // console.log(await result.json(), "result");
      setWallet(await wallet.json());
    };

    getData();
  }, []);

  {
    customers.forEach((customer) => console.log(customer["number"]));
  }
  return (
    <>
      <select>
        {customers.length != 0 ? (
          customers.map((customer) => (
            <option key={customer.id} value={customer.number}>
              {customer.number}
            </option>
          ))
        ) : (
          <></>
        )}
      </select>
      <button>Apply</button>

      <Customers />
      <div className="wallet">
        <div>Opening: {wallet?.opening}</div>
        <div>Debit: {wallet?.debit}</div>
        <div>Credit: {wallet?.credit}</div>
        <div>Closing: {wallet?.closing}</div>
      </div>
    </>
  );
};
