# DataBaseHelpers
A Practice Repo meant for helping engineers work through different CRUD within both relational and non-relational databases.

### Tech-Stack :
 - React
 - Webpack / Babel
 - Jquery / Axios
 - Node / Express
 - MySQL DBMS
 - Mongo DBMS

&nbsp;

 ## Getting Started

 - <em>npm install</em> to install all our dependencies for the application.
 - <em>npm run build</em> to bundle our files with Webpack
 - <em>npm start</em> to start the node/express server

&nbsp;



This application is a simple Address Book that has CRUD functionality to view, post, edit and delete new contacts. Clicking on a name will load that contact's information, with options to delete or edit. Feel free to play around with this front end, <em>specifically checking out the console logs and methods on App.jsx </em> to really see what is happening underneath the hood. Front end code is important, but you'll be focusing mainly on the back end, with some slight changes in front end as needed (re-rendering state in the success of an http request). <strong>All the http requests are currently functioning and will send the appopriate information to the server to then be manipulated by you.</strong>

You have Dummy data provided for you via the dummyContacts.js file, <strong><em>it is advised that you base your database schemas/tables off of this template.</em></strong>

&nbsp;


## Setting up your connection

- You have a choice from the get go to start with either MongoDB or MySQL, however you'll need to fill in some information to get these databases running on your local machine. The CRUD functionality is simple enough to work with both relational and non-relational databases.
- Make sure to import the correct database directory into your server so you have access to the correct database query methods.

  - MySQL:
    - fill out the schema.sql with the correct information to create a Database and Table with the appropriate column names.
    - feel free to also write some INSERT statements in that file to populate your table with some data to manipulate.
    - terminal command to run the schema file is:
      mysql -u /*username*/ -p < schema.sql

  - MongoDB:
    - make sure you're connecting to the correct database, then fill out the Contact schema with the appropraite information based on your dummy data.

&nbsp;


## Writing your queries

- On both mysql and mongo, you have the getContacts method written out for you, it is your job to write out the post, delete and update requests using the getContacts as a soft guide, as well as diving into the documentation for the specific technology you're using.


- Don't delete code when refactoring to the next DBMS! There are two DB directories, so you can refactor without having to delete code. The only place where you may need to comment out code is in your server index when you're changing the DB method names. This will be useful for later, when you can have a quick reminder of setting up both types of dbs in one repo.