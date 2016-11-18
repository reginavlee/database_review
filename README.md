# HRLA 11 Database Review


###Install and run the project:

1. Fork a copy of the project and clone it down to your computer 
2. Run `npm install`
3. Run `npm start` to start the server
4. Start up or download postman: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en

###Tasks:

1. Go to https://www.elephantsql.com/, sign up (it's free), then create a new database instance
2. In your `db_config.js` file, paste the instance url to your sequelize representation
3. In `db_config.js`, create a `Users` table 
4. In `db_models.js`, write two functions: 1)Add a user to the database 2) Get all users from the database


####Helpful Sequelize Links:
1. Creating schema and available data types: http://docs.sequelizejs.com/en/v3/docs/models-definition/ 
2. Querying your database: http://docs.sequelizejs.com/en/latest/api/model/
