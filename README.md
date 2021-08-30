# Socially Inept API
![MIT License badge](https://img.shields.io/badge/license-MIT_License-green)
## Description
Socially Inept Api is a mongoDB/mongoose Social Media api. It allows the creation of Users that can share thoughts, reactions, and become friends with other users. The User and Thought routes support Create, Read, Update, and Delete. Reactions and Friends are limited to Create and Delete, but can be Read through their parent Model (Users are the parent of Friends, and Thoughts are the parent of Reactions).

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Routes/JSONs](#routes-and-jsons)
* [License](#license)
* [Tests](#tests)
* [Credits](#credits)
* [Contributions](#contributions)
* [Questions](#questions)

## Installation
1. Ensure that you have installed mongoDB on your local device.
2. Clone repository 
3. Open a new command line that is in the correct directory 
4. Run `npm i `
5. The application can now be used.

## Usage
Once the application has been installed, open a new command line within the repository's directory, enter the command `npm start`. Socially Inept API is now up and running. You can now link it to your front end or manipulate the information with a program like Insomnia or PostMan which provides a UI to do a variety of GET, POST, PUT, DELETE requests. 

Here is a detailed walkthrough in the usage of the [Socially Inept API](https://drive.google.com/file/d/1Cw_W_J1l4FYcDw-qfqamDICutUnVz3yh/view)

## Routes and JSONs
Note that each of these routes are the subdirectory following your the domain that is hosting the database. Please insert your domain before the routes for proper usage. Additionally, many tables have validation if CONSTRAINED keys attempt to associate with an ID that doesn't exist it will throw an error.
### USERS 
#### Get All Users
* __Route:__ `/api/users/`
* __Method:__ GET
* __JSON:__ No JSON required


#### Get User by ID
* Route: `/api/users/:id`
* __Method:__ GET
* JSON: No JSON required

#### Create New User
* __Route:__ `/api/users`
* __Method:__ POST
* __JSON:__ 
```
{
  "username": "newUser",
	"email": "test@email.com"
}
```
#### Update User by ID
* __Route:__ `/api/users/:id`
* __Method:__ PUT
* __JSON:__ 
```
{
  "username": "editedUsername",
	"email": "edited@email.com"
}
```
#### Delete User By ID
* __Route:__ `/api/users/:id`
* __Method:__ DELETE
* __JSON:__  No JSON required
* Note: This will cascade delete all associated thoughts and reactions

### Friends
#### Add New Friend
* __Route:__ `/api/users/:userId/friends/:friendId`
* __Method:__ GET
* __JSON:__ No JSON required
* Note: The `userId` is the `_id` for the User that the friend is to be added to. `friendId` is the `_id` for the User that is being added.

#### Delete Friend
* __Route:__ `/api/users/:userId/friends/:friendId`
* __Method:__ DELETE
* __JSON:__  No JSON required
* Note: The `userId` is the `_id` for the User that the friend is to be removed from. `friendId` is the `_id` for the User that is being removed.

### THOUGHTS 
#### Get All Thoughts
* __Route:__ `/api/thoughts/`
* __Method:__ GET
* __JSON:__ No JSON required


#### Get Thought by ID
* Route: `/api/thoughts/:id`
* __Method:__ GET
* JSON: No JSON required

#### Create Thought
* __Route:__ `/api/thoughts/`
* __Method:__ POST
* __JSON:__ 
```
{
   "thoughtText": "Another Test Thought Here!",
   "username": "{username for thought author}",
   "userId": "{_id for the appropriate User that corresponds with the Username}"
}
```
#### Update Thought By ID
* __Route:__ `/api/thoughts/:id`
* __Method:__ PUT
* __JSON:__ 
```
{
   "thoughtText": "{Edited thoughtText}"
}
```
#### Delete Thought By ID
* __Route:__ `/api/thoughts/:thoughtId`
* __Method:__ DELETE
* __JSON:__  No JSON required

### REACTIONS
#### Add New Reaction
* __Route:__ `/api/thoughts/:thoughtId/reactions/`
* __Method:__ POST
* Note: `thoughtId` is the `_id` for the Thought that the reaction correspondes with
* __JSON:__ 
```
{
	"reactionBody": "{reaction text goes here}",
	"username": "{username of the reaction author}",
	"userId": "{_id of the User that matches the username}"
}
```

#### Delete Reaction
* Route: `/api/thoughts/:thoughtId/reactions/:reactionId`
* __Method:__ DELETE
* Note: `thoughtId` is the `_id` for the Thought that the reaction correspondes with, and `reactionId` is the `reactionId` of the reaction to be deleted (not to be confused with the reaction's `_id` value)
* JSON: No JSON required

## License

MIT License

Copyright &copy; 2021 Jake Pedigo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests
A couple of tests were made to verify the Date Format Getters to standardize the date format within the Database. To initiate the test use the command: `npm run test`

## Credits
### Assets
* [Node.js](https://nodejs.org/en/)
* [Mongoose](https://mongoosejs.com/)
* [Express.js](https://expressjs.com/)
* [Jest](https://jestjs.io/)

## Contributions
Contributions to this project follow the Contributor Covenant [additional information can be found here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

## Questions
For any inquiries regarding Team Manager, please contact Jake Pedigo:
* GitHub: [jbped](https://github.com/jbped)
* Email: <pedigojacob@gmail.com>
