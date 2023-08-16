// all thos is example real one



//in database information----
//                           |
//                           |
//                           |
//                           V



// { "_id" : 3, "name" : "Empire State Pub", "borough" : "Brooklyn" }
// { "_id" : 5, "name" : "Jane's Deli", "borough" : "Brooklyn" }
// { "_id" : 1, "name" : "Central Park Cafe", "borough" : "Manhattan" }
// { "_id" : 4, "name" : "Stan's Pizzaria", "borough" : "Manhattan" }
// { "_id" : 2, "name" : "Rock A Feller Bar and Grill", "borough" : "Queens" }
// { "_id" : 5, "name" : "Jane's Deli", "borough" : "Brooklyn" }
// { "_id" : 3, "name" : "Empire State Pub", "borough" : "Brooklyn" }
// { "_id" : 4, "name" : "Stan's Pizzaria", "borough" : "Manhattan" }
// { "_id" : 1, "name" : "Central Park Cafe", "borough" : "Manhattan" }
// { "_id" : 2, "name" : "Rock A Feller Bar and Grill", "borough" : "Queens" }



db.restaurants.find().sort( { "borough": 1, "_id": 1 } )


// # rest full api

