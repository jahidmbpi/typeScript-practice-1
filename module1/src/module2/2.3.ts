{
  //generic type
  type GenericArray<T> = Array<T>;
  // const roolNumber: number[] = [1, 2, 3, 4];
  const roolNumber: GenericArray<number> = [1, 2, 3, 4];
  //   const mentors: string[] = ["mr.x", "mr.y", "mr.z"];
  const mentors: GenericArray<string> = ["mr.x", "mr.y", "mr.z"];
  //   const boolArray: boolean[] = [true, false, true, false];
  const boolArray: GenericArray<boolean> = [true, false, true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "mezba",
      age: 100,
    },
    {
      name: "jhonkar",
      age: 101,
    },
  ];

  //   generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["mr.x", "mr.y"];
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    121,
    { name: "persian", email: "a@gmail.com" },
  ];

  //
}
