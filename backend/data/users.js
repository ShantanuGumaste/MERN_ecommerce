import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Shantanu G",
    email: "shantanu@gmail.com",
    password: bcrypt.hashSync("admin", 10),
  },
  {
    name: "Anuj",
    email: "anuj@gmail.com",
    password: bcrypt.hashSync("admin", 10),
  },
];

export default users