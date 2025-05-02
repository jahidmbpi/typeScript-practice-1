{
  // interface

  type user = {
    name: string;
    age: number;
  };

  interface user2 {
    name: string;
    age: number;
  }

  type roolNumber = user2 & { role: string };

  interface UserWithRool extends user2 {
    role: string;
  }

  const user1: UserWithRool = {
    name: "parsian",
    age: 100,
    role: "manager",
  };

  type Rool1 = number[];

  interface Rool2 {
    [index: number]: number;
  }

  const roolNumber: Rool2 = [1, 2, 3, 4, 5];
  //   ==================

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
