{
  //
  // type assertio---------->
  let anything: any;
  anything = "next lavel web development";
  anything = 222;
  //   anything as number;

  const KgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const converTedvalue = parseFloat(value) * 1000;
      return `the converted value is : ${converTedvalue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = KgToGm(1000) as number;
  const result2 = KgToGm("1000") as string;

  type CustomError = {
    massage: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).massage);
  }

  //
}
