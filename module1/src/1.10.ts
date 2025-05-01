{
  //
  //   type FrontentDeveloper = "fakibazDeveloper" | "joniourDeveloper";
  //   type FullStakDeveloper = "frontantDeveloper" | "expertDeveloper";
  //   type Developer = FrontentDeveloper | FullStakDeveloper;

  //   const newDevloper: FrontentDeveloper = "joniourDeveloper";

  //   type User = {
  //     name: string;
  //     email: string;
  //     gander: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };

  //   const user: User = {
  //     name: "persian",
  //     email: "jahid@gmail.com",
  //     gander: "male",
  //     bloodGroup: "A+",
  //   };

  type FrontentDeveloper = {
    skills: string[];
    designation1: "frontantDeveloper";
  };
  type BackEndDeveloper = {
    skills: string[];
    designation2: "backEndDeveloper";
  };

  type FullStakDeveleoper = FrontentDeveloper & BackEndDeveloper;

  const fullStakDeveloper: FullStakDeveleoper = {
    skills: ["html", "css", "experss"],
    designation1: "frontantDeveloper",
    designation2: "backEndDeveloper",
  };

  //
}
