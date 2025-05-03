{
  //interface Generic type

  interface Developer<T, X> {
    name: string;
    computer: {
      brand: string;
      model: string;
      relaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  interface Poor {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<Poor, null> = {
    name: "persian",
    computer: {
      brand: "asus",
      model: "1214-x",
      relaseYear: 2018,
    },
    smartWatch: {
      brand: "emilab",
      model: "2155-y",
      display: "amolate",
    },
  };

  interface Rich {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleeptrack: boolean;
  }
  interface Bike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<Rich, Bike> = {
    name: "jhanker",
    computer: {
      brand: "apple",
      model: "4545-x",
      relaseYear: 2022,
    },
    smartWatch: {
      brand: "apple",
      model: "2155-vv",
      heartTrack: true,
      sleeptrack: true,
    },
    bike: {
      model: "yeamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
