{
  //conditional type
  type a1 = null;
  type b1 = undefined;
  type x = a1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheik = {
    bike: string;
    car: string;
    ship: string;
  };

  type cheakVahical<T> = T extends keyof Sheik ? true : false;
  type HasBike = cheakVahical<"car">;
  //
}
