# Social-Network-API

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Description

This app forms the foundation of a full-stack social network using MongoDB for the database, Express.js for routing, and Mongoose ODM. It establishes initial CRUD API routes for user creation, search, update, and deletion. Users can share thoughts, react to friends' thoughts, manage friend lists, and delete thoughts, reactions, friends, and their profile. Despite facing challenges with MongoDB's flexibility and error troubleshooting, it has been a valuable learning experience for full-stack development. The plan is to enhance the app by adding a comprehensive front-end UI with React for a complete MERN-based application.

## Video walkthrough:

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

## Contributing

Contributions to this project will not be accepted at this time, as this project is an assessment piece for a coding course, and it must be the project author's own work. However, feel free to fork the repository and make your own changes!

## Author

Click the links below to reach out to the developer for this project.

Fergus Illman

Email: <a href="mailto:fergus.coding@gmail.com">fergus.coding@gmail.com</a>

[Link to my Github](https://github.com/Fergus-Codes)
