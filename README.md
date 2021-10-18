# loginWithMBM

Front-End - React.js
Back-End - Node.js, Express.js, MongoDB

FILE STRUCTURE -->
frontend - Holds the client application
    public - This holds all of our static files
    src
        API Manager - This folder contains all the API integrations
        App-
            index.js - This is what renders all of our browser routes and different views
        index.js - This is what renders the react app by rendering App.js, should not change
        components - This folder holds all of the different components that will make up our views
            assets - This folder holds assets such as images, docs, and fonts
        routes - This folder contains the routes mapped with various react components 
        index.js - This is what renders the react app by rendering App.js, should not change
    package.json - Defines npm behaviors and packages for the client
    .gitignore - Tells git which files to ignore

backend - Holds the server application
    app
        config - This holds our configuration files, like mongoDB uri
        controllers - These hold all of the callback functions that each route will call
        models - This holds all of our data models
        routes - This holds all of our HTTP to URL path associations for each unique url
    server.js - Defines npm behaviors and packages for the client
    package.json - Defines npm behaviors like the scripts defined in the next section of the README
.gitignore - Tells git which files to ignore
README - This file!

To run it locally - 
1. Fork the repo and clone it.
2. Open two terminal windows (one for UI(client) and one for server).
3. Move into respective folders using "cd backend" and "cd frontend".
4. Install dependecies in each folder individually using "npm i"
5. Start the server using "npm start" and then start the frontend.
6. The UI will open on port 3001.
7. The server will be running on port 3000.
8. Go to "http://localhost:3001" to see the application running.
