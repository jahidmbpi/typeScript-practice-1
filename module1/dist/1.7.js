"use strict";
// spreate oparator
//distrauctureing
{
    //
    const bross1 = ["mir", "firoz", "mizan"];
    const bross2 = ["tonmoy", "nahid", "rahat"];
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
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    const greatFriends = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greatFriends("abul", "babul", "kabul", "labul");
    //
}
