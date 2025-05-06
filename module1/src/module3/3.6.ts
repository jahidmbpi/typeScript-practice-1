{
  //getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }

    // getter
    get balance() {
      return this._balance;
    }

    // setter (optional)
    set balance(amount: number) {
      if (amount < 0) {
        throw new Error("Invalid amount");
      }
      this._balance = amount;
    }
  }

  //
}
