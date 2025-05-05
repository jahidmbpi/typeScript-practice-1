{
  //
  const arraYOfNumbers: number[] = [1, 2, 3, 4];
  const arrayOfStrings: string[] = arraYOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfStrings);

  type arraYOfNumbers = {
    height: number;
    width: number;
  };

  //   type arreaString = {
  //     height: string;
  //     width: string;
  //   };

  type arreaString<T> = {
    [key in keyof T]: T[key];
  };
  const area1: arreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
