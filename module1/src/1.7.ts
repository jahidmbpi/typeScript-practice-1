// spreate oparator
//distrauctureing
{
  //

  const bross1: string[] = ["mir", "firoz", "mizan"];
  const bross2: string[] = ["tonmoy", "nahid", "rahat"];

  bross1.push(...bross2);

  const mentors1 = {
    typeScript: "mezba",
    redux: "mir",
    dbms: "mizan",
  };
  const mentors2 = {
    prisma: "firoz",
    next: "tonmoy",
    could: "nahid",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  const greatFriends = (...friends: string[]) => {
    friends.forEach((friend) => console.log(`hi ${friend}`));
  };
  greatFriends("abul", "babul", "kabul", "labul");

  const user = {
    id: 150,
    name: {
      fristName: "mezbah",
      middleName: "abedin",
      lastName: "persian",
    },
    contact: "01875008453",
    address: "ctg",
  };

  const {
    contact,
    name: { middleName: midName },
  } = user;

  //   array destraucturing
  const myFriend = ["chander", "jony", "roos", "rache"];

  const [, , bestFriend, ...rest] = myFriend;

  //
}
