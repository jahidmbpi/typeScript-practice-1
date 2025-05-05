{
  //
  const age: number = 15;

  if (age > 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log(isAdult);

  const isAthenticated = undefined;
  const result = isAthenticated ?? "guest";
  const result2 = isAthenticated ? isAthenticated : "guest";
  console.log(result);
  //
}
