{
  //type guard

  type Alphaneumeric = string | number;
  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toLocaleString() + param2.toLocaleString();
    }
  };

  const result = add(2, "22");
  console.log(result);

  //in guard
  type User = {
    name: string;
  };
  type Admin = {
    name: string;
    role: string;
  };

  const getuser = (user: User | Admin): string => {
    if ("role" in user) {
      return `${user.name} and his role is ${user.role}`;
    } else {
      return `my name is ${user.name}`;
    }
  };

  const normalUser = getuser({ name: "jahid", role: "admin" });

  console.log(normalUser);

  //
}
