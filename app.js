const { faker } = require("@faker-js/faker");
const fs = require("fs");

const generateUsersData = (number) => {
  const users = [];
  while (number >= 0) {
    users.push({
      id: number,
      name: faker.name.fullName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      birth: {
        country: faker.address.country(),
        date: faker.date.past(10, "1980-01-01"),
      },
      roleId: faker.helpers.arrayElement([1, 2, 3]),
    });
    number--;
  }
  return users;
};

const singularDataModel = {
  name: "John Doe",
  email: "john.doe@email.com",
  theme: "dark",
  team: "Team 1",
};

const roleModel = [
  {
    id: 1,
    name: "admin",
    description: faker.lorem.paragraphs(1),
  },
  {
    id: 2,
    name: "sub-admin",
    description: faker.lorem.paragraphs(1),
  },
  {
    id: 3,
    name: "regular",
    description: faker.lorem.paragraphs(1),
  },
];

fs.writeFileSync(
  "./users.json",
  JSON.stringify({
    users: generateUsersData(20),
    profile: singularDataModel,
    roles: roleModel,
  })
);
