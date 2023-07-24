const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
  {
    username: "Fergus",
    email: "fergus@email.com",
    thought: ["hunry", "tired", "happy", "sad", "angry"],
  },
  {
    username: "Sam",
    email: "Sam@email.com",
    thought: ["tired", "happy", "sad", "angry"],
  },
  {
    username: "Henry",
    email: "Henry@email.com",
    thought: ["money", "tired", "happy", "sad", "angry"],
  },
];

console.log(connection);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});
  await User.collection.insertMany(users);
  console.table(users);
  process.exit(0);
});
