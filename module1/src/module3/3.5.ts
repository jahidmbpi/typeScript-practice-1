{
  //access modifire
  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
    addDeposite(amount: number) {
      this.balance = this.balance + amount;
    }
    getBlance() {
      return this.balance;
    }
  }

  class StusentAccount extends BankAccount {}
  const poorMan = new BankAccount(111, "mr.poor", 55000);
  console.log(poorMan);

  //
}
