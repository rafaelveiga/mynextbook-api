const dotenv = require("dotenv");
dotenv.config();

module.exports = [
  {
    name: "default",
    type: "mysql",
    host: process.env.HOST,
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: "my_next_book",
    entities: ["src/database/entities/*.{js,ts}"],
    synchronize: true,
  },
];
