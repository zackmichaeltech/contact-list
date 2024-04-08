# Contacts Application

This project was built using React, Redux, Mongodb, Express, Node. It is a simple contacts application where users can login using their Google account and then begin adding their own contacts! Soon you will be able to login with additional providers and have more features within the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

```
node version 8.9.4 and greater
```

What things you need to install the software and how to install them. In order to utilize the Google OAuth authentication you will first need to set up an account, create a project, set up the project for OAuth, enable the Google+ API and generate a CLIENTID and CLIENT SECRET, lastly place those generated keys into the dev.js file. Below are a more detailed set of instructions in order to achieve a proper set up. First, navigate to <a href= "https://console.developers.google.com" target="_blank">Google Developer Console</a> and if you haven't already done so create an account and then create a project. To create a project, simply click the drop down titled "Select a Project" and click the plus sign. Below are numbered instructions to continue with the proper set up. 

Before you begin the below steps within the Google Console, make sure the project you just created is listed in the dropdown menu! 

1. Once project has been created, select APIs & Services in the side menu
2. Click ENABLE APIS AND SERVICES at the top of the Dashboard
3. Search for Google Plus or Google+ API
4. Enable the API
5. Select Credentials on the side menu
6. Click CREATE CREDENTIALS > OAuth Client ID > Configure Consent Screen
7. Enter Whatever you would like in the Product name shown to users > SAVE 
8. Select the Web Application radio button
9. Under Authorized Javascript Origins input http://localhost:8080
10. Under Authorized redirect URI's input http://localhost:8080/auth/google/callback AND  http://localhost:3000/auth/google/callback > SAVE
11. In your code editor, create a new file in the config folder named dev.js and input the following
12. NOTE its important you name the file in the config folder dev.js, unless you want to change the if statement in the keys.js file

```
module.exports = {
    googleClientID: "ENTER YOUR GOOGLE CLIENT ID HERE",
    googleClientSecret: "ENTER YOUR GOOGLE CLIENT SECRET HERE",
    cookieKey: "TYPE ANYTHING HERE"
} 
```
If you still have trouble please refer to <a href="http://www.passportjs.org/docs/google/" target="_blank">PASSPORT.js documentation.</a>

Now that you have a dev.js file properly configured to your own Google OAuth Client keys you now need to start MONGODB as a service. Follow the install instructions below.

### Installing

Next all you have to is install the dependecies below, start mongodb, start up the express server and then start your development server.

```
npm install
```

Next open the code up in your editor of choice and create the following folder structure. This structure will allow us to log our db processes and get mongodb started as a service. Please make sure the file/folder names are exactly as I have listed them below or make the according changes in the mongod command prompt below. 

1. Create a folder at the same level as the existing folders called <strong>"data"</strong>
2. Create a folder within the "data" folder you just created called <strong>"db"</strong>
3. Create a folder at the same level as the data folder you had created and called <strong>"logpath"</strong>
4. Within the folder logpath create file called <strong>"log.txt"</strong>

These above steps are only necessary if you run the below mongodb demand exactly as I have it. For instance, the --logpath flag is directed to the ./logpath/log.txt files we just created above and the --dbpath flag is directed to the data/db folders we created above as well.                

In the terminal window run the following command in the working folder directory of the project

```
mongod --fork --logpath ./logpath/log.txt --dbpath data/db
```

You should see that mongodb has forked successfully. Next just start up the express server in the terminal window run the following command. IF you get an error please check that your folder structure is exactly as I have instructed above as the command relies on having the data/db folder and ./logpath folder in place.

```
nodemon server.js 
```

Lastly, start the development server. Please have it start in localhost:3000 or be prepared to change your set up in the google console!

```
npm start
```

## Built With

* REACT
* REDUX
* MONGODB
* EXPRESS
* NODE
* PASSPORT.JS



