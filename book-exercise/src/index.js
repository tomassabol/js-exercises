const users = [
  {
    name: "John",
    userRole: "admin-read",
  },
  {
    name: "Jane",
    userRole: "admin-write",
  },
  {
    name: "Jim",
    userRole: "user",
  },
  {
    name: "Jill",
    userRole: "user",
  },
];

for (const user of users) {
  if (user.userRole === "admin-read" || user.userRole === "admin-write") {
    console.log(`${user.name} is an admin`);
  }
}

const pi = 3.14;
if (pi >= 3) {
  console.log("Pi is greater than 3");
}

function add(a, b) {
  return a + b;
}

const add = (a, b) => {
  return a + b;
};
