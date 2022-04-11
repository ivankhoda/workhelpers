import axios from "axios";
import { GenericClass } from "./../GenericClass/GenericClass";

export class CustomerAgent extends GenericClass {
  constructor(token: string, url: string, options?: any) {
    super(token, url, options);
  }
  async getCustomers() {
    return await axios
      .get(this.url, this.authorize())
      .then((resp) => resp.data)
      .catch((error) => error);
  }
}
