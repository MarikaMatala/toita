# Exercises

Use screenshots to support your answer when applicable. Instructions on how to submit your answers are found in the [Moodle workspace](https://moodle.jamk.fi/course/view.php?id=7228&section=3).

### Exercise set 1 - Intro, Node and npm, tools, Express fundamentals

1. Find out the current user by using console.log() to log the global process variable. [3p]
2. Find out the system uptime and amount of total memory using the built-in `os` module. [3p]
3. Create a basic web server with basic Node.js (based on the material and the provided examples), that will send back an `index.html` file on a GET request to '/'. The application should also send back the following json data on a GET request to '/data'. You might need to use JSON.stringify() to make this work. Notice also the content-type that you're sending back to the client. [4p]
```js
const jsondata = {count: 35, message: 'Welcome' }
```
4. Test the [provided sample data](01_exercises/albums.json) for a album collection app by sending HTTP requests with Postman or VS Code REST Client to json-server (install from npm). Test the fetching, creation, deleting and updating of the albums. [4p]
 

---
### Exercise set 2 - Express router, application structure

1. Create the album collection app with Express framework based on the examples provided in the course material and in the lectures. [4p]
2. Refactor the album collection app to use Express router setup with the file and directory structure described in the examples. Proceed in small steps and commit the code in stable situations, so you can revert back to a working situation if the changes break some functionality. [4p]
3. Create a simplified authentication middleware targeting a specific route in your application, that searches for a query string (user). If the query string is not provided, then send back a response as "Unauthorized". [3p]
4. Implement an `index.html` file that is served from the directory `./public` with express.static(). On page load (`http://localhost:port`) it should list all the albums from the current album collection by querying them from the API. It's enough to just list one or a few properties for each album. Below is a script that you can use for the functionality. [4p]
    
```js title="script.js"
const result = document.querySelector('.result')
const baseUrl = `${window.location.origin}/api`
const fetchVehicles = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/vehicles`)

    const vehicles = data.data.map((vehicle) => {
      return `<ul><li>${vehicle.make}</li><li>${vehicle.model}</li><li>${vehicle.type}</li></ul>`
    })
    result.innerHTML = vehicles.join('')
  } catch (error) {
    console.log(error)
    result.innerHTML = `<div class="alert alert-danger">Could not fetch data</div>`
  }
}
fetchVehicles()
```
The script uses the http client axios, which you can include in the html with:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js" integrity="sha512-odNmoc1XJy5x1TMVMdC7EMs3IVdItLPlCeL5vSUPN2llYKMJ2eByTTAIiiuqLg+GdNr9hF6z81p27DArRFKT7A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

---
### Exercise set 3 - MongoDB

1. Create a free cluster to MongoDB Atlas following the instructions in the material. [1p] 
2. Create a new database (Database Deployments -> Browse collections -> Create database). Create a simple collection of names (firstname, lastname) in MongoDB Atlas. You can also add a few documents in Atlas. [2p] 
3. Create a Node.JS CLI (no Express needed) application to add names to the collection. The application should be operated only from the command line. The names are inputted as command line arguments that can be accessed with (https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_argv). To run the program you would type `node mongodb_names.js Firstname Lastname`. If no arguments are specified, the existing list of names is returned. [4p]
4. Refactor the album collection app implemented in previous exercises to use MongoDB as data storage with the examples provided in the course material [6p]
   
---
### Exercise set 4 - MongoDB

1. Install ESLind and configure it for the album collection project. Run eslint in your project and correct any errors that the linter suggests. [3p]
2. Add validation for the fields in the album collection schema. Artist name, album title are required, track count must be > 0, Release year also required and within reasonable limits (e.g. 1900 - current year). [3p]
3. Add license plate data to the vehicle app (in the examples folder) and construct a [custom validator](https://mongoosejs.com/docs/validation.html#custom-validators) for the license plates (we can stick to standard Finnish pattern: 3 letters - 3 numbers). [4p]

---
### Exercise set 5 - API design

1. Implement sorting the music albums by different fields. [2p]
2. Add numeric filtering by release year to the API. [2p]
3. Add a `fields` filter where the server responses with only the fields that the client requested. You can use [Query.prototype.select()](https://mongoosejs.com/docs/api.html#query_Query-select) found in Mongoose. [3p]
4. Add a search functionality for artist names and album titles using regex, so that album titles and artist names can be filtered with partial patterns found in those fields (e.g. search pattern `tot` matches the artist name `Toto`). [4p]
5. Modify the error handling for the album collection app, so that the try...catch blocks can be removed from the controllers. [3p]
6. Install the npm package `http-status-codes` and refactor the error handling logic to use text-based codes instead of the numeric ones. [2p]
   
---
### Exercise set 6 - Authentication and authorization with JSON Web Tokens

1. Implement a POST route '/register', that checks whether all the required fields (name, email, password, password(confirmation)) are present and saves the user information to a MongoDB collection. Remember to hash the passwords, so that the database doesn't contain any plain text passwords. If you're having problems with `bcrypt` in Windows, them uninstall `bcrypt` and use `bcryptjs` instead. [4p]
2. Implement checking the database ( e.g. User.findOne() ) for duplicate email addresses. [3p]
3. Only users with a token from succesful login should be able to perform create, delete and update operations on the album collection. A public `/getAllalbums` route should still return albums even when user is not logged in. [4p]
4. Construct separate custom error handling classes for `NotFound` (no albums with id) and `BadRequest` (required values missing on create) that extend from class `APIError`. Add these new errors to appropriate places in the controllers. [4p]

---
### Exercise set 7 - Persistent logins with sessions and cookies

1. Refactor the music album collection app to utilize sessions for login/logout feature. You can use `passport-local` as in the examples or construct your own implementation. [7p]
2. Include user roles in the application, so that an admin user can perform CRUD operations on all the added albums and users. Regular users should only be able to access (also create and delete) their own albums, so some form of `accessed resource userID` vs `request userID` check is probably needed. [8p]
   
---   
### Exercise set 8 - Backend testing, deployment

1. Write a test for HTTP GET to /api/albums that confirms the exact number of albums in your database. You might want to initialize the test database with the test data first and remember to use the test database instead of the production db. [3p]
2. Write a test to make sure that adding albums with a POST request to /api/albums is working as expected. The album count should atleast grow by one. [4p]
3. Add tests for the deletion of a album that checks if the deletion has occured. [4p]
4. Deploy your application in a service of your choice. You can utilize any service discussed in the lectures or pick your own service. [8p]
   
---
### Exercise set 9 - GraphQL, Apollo Server

1. Create a GraphQL server for album data. Use an array of albums as mock data for the server. Implement the schema based on your album data. Three to four fields is enough for this task. [5p]
2. Test that querying the data works as expected from Apollo Playground. [2p]
3. Implement a mutation for deleting an album. Test the mutation from Apollo playground. [5p] 
4. Refactor the datasource to use a MongoDB database instead of the array. Test that the queries and mutations still work. [6p] 

---
### Exercise set 10 - Relational databases

1. Create the vehicle app from the given template (course repo, 10_examples). Host the Postgres database either locally or in a cloud environment. [2p]
2. Add the user model as in the material with the necessary fields (id, username and name). Implement routes for creating and listing the users. [3p]
3. Add a relationship between vehicles and users. It is enough that a user can have many vehicles, but a vehicle can only belong to one user. Implement the addition of the userId for each new vehicle. [5p]
4. Create a GraphQL API (with a REST data source) that makes requests to your application and allows for querying and mutating the data through the REST endpoints. [7p]