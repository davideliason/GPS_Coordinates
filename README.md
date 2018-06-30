# GPS Coordinates
## David Eliason
### Description

using MongoDB Atlas as cloud hosted DB, express on node.js, react/redux front-end

### Steps
First, I created a simple Express server with a single route, sending an array with two objects of key-values pairs, sample data for a sample user, lat, longitude. That could be tested independently by starting up the server and a browser.

Next, I created a CRA with the use of Fetch to grab the data from the server, set that to state, and then render that data using React component.

Next, I worked on the DB side of things, creating a cluster on Atlas.