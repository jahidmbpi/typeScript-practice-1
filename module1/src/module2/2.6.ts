{
  //generic constraints with keyof operator

  type Vahical = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vahical;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "Mr.persian",
    age: 26,
    address: "ctg",
  };

  const result1 = getPropertyValue(user, "name");

  console.log(result1);

  //
}
