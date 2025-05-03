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

  const addCourseToStudent = <T>(Student: T) => {
    const course = "next lavel web dev";
    return {
      ...Student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr.X",
    email: "X@gmail.com",
    devType: "next lavel developer",
  });
  const student2 = addCourseToStudent<{
    name: string;
    email: string;
    hassWatch: string;
  }>({
    name: "Mr.Y",
    email: "Y@gmail.com",
    hassWatch: "apple watch",
  });

  console.log(student1);

  //
}
