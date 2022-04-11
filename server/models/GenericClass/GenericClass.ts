export class GenericClass {
  token: string;
  url: string;
  options?: any;
  constructor(token: string, url: string, options?: any) {
    this.token = token;
    this.url = url;
    this.options = this.options;
  }
  authorize() {
    if (this.token) {
      return { headers: { Authorization: `${this.token}`, "content-type": "application/json" } };
    }
  }
}
