{
  //   utiliti type

  type person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type Name = Pick<person, "name" | "age">;

  type contactInfo = Omit<person, "name" | "age">;

  type personRequire = Required<person>;

  type persionPertial = Partial<person>;
  //
}
