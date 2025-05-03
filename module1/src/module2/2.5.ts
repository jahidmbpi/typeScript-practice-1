{
  //function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("bangladesh");
  const resGeneric = createArrayWithGeneric<string>("bangladesh");

  type User = {
    id: number;
    name: string;
  };

  const resGenericObject = createArrayWithGeneric<User>({
    id: 2222,
    name: "persian",
  });

  //---------------------
  const createArrayWithGeneric2 = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const regeneric = createArrayWithGeneric2<string, number>("bangladesh", 1212);
  //
}
