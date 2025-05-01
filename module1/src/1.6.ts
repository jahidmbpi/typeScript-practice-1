function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object ---->function--->method
const poorUser = {
  name: "mejbah",
  balance: 0,
  addBalance(balance: number): string {
    return `my new balance is ${this.balance + balance}`;
  },
};

const array: number[] = [1, 4, 10];
const newArray: number[] = array.map((ele): number => ele * ele);
