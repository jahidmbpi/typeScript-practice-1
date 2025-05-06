{
  //Statics in Opp
  class Counter {
    static count: number = 0;
    inCrement() {
      return (Counter.count = Counter.count + 1);
    }
    dicrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  console.log(instance1.inCrement());
  console.log(instance1.inCrement());
  console.log(instance1.inCrement());
  console.log(instance1.inCrement());
  const instance2 = new Counter();
  console.log(instance2.dicrement());
  console.log(instance2.dicrement());
  console.log(instance2.dicrement());
  console.log(instance2.dicrement());
  console.log(instance2.dicrement());

  //
}
