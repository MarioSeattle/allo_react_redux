Initial setup

npm init --yes
npm install --save babel-preset-react babel-preset-es2015 watchify babelify

modify the scripts 

vim package.json
  "scripts": {
    "build": "watchify src/app.js -o public/bundle.js -t [ babelify --presets [ react es2015 ] ]",
"server": "cd public; live-server --port=1234 --entry-file=index.html" }
used :wq to exit and save

mgomez:allo Mgomez$ ls
node_modules	    package.json

search for redux https://cdnjs.com/

Run the servers
npr run build
npm run server
Live reload enabled using plug in

State is a set of values that describes the application as the user sees it right now

Second video
Redux uses a combination of actions and reducers to manage the changes on the state
We start by creating store
Look at immutability: We never change a value but we create a diferent one

//action is a parameter and the reducer is the function
//We will make change to the state based on the action (function)

Third video
JSX similar to Html 
Babelify running in out watching command converting the JSX syntax into the react functions 

Fourth video
The state changes and the app re renders! In our app reacts just renders what is necessary, 
we are going to use actions to change the state

Add Action
//ADD_DECK
Manage showing and hidding trought the app state
//SHOW_ADD_DECK
//HIDE_ADD_DECK

Create function to return an object addDeck







