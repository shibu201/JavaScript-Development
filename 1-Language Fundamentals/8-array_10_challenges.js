// 2 ways to declare array
// using array literals
let fruits = ['apple', 'banana', 'grapes']
// using constructor
let veggies = new Array('cauliflower', 'bhindi')
console.log(fruits, typeof fruits);
console.log(veggies, typeof veggies);
// accessing elements
console.log(fruits[1]);

// Challenge 1
let tea_flavours = ["Green Tea", "Black Tea", "Oolong Tea"]
let first_tea = tea_flavours[0]
console.log(first_tea);

// Challenge 2
let cities = ["London", "Tokyo", "Paris", "New York"]
let favourite_city = cities[2]
console.log(favourite_city);

// Challenge 3
let teaTypes = ["Herbal Tea", "White Tea", "Masala Chai"]
let favourite_tea = teaTypes[1]
console.log(favourite_tea);

// adding an element at end - Challenge 4
// one way
let city_visited = ['Mumbai', 'Delhi']
city_visited[2] = 'Bangalore'
// different approach, if you don't know the length of array but want to add at the end. as if u don't know the length, it may cause replacing the element. 
city_visited[city_visited.length] = 'Kolkata'
console.log(city_visited);
city_visited.push('Hydrabad')  // prefeered way as it add elements at the end
console.log(city_visited);

// Challenge 5 
// pop() removes the last array element and also return it. call it multiple times and it will keep removing. in real world, it is used when someone cancelled last order in restaurents.
console.log('Challenge - 5');
let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"];
let last_orders = teaOrders.pop()
console.log(teaOrders); // returns elements left after removal
console.log(last_orders); // returns removed one
teaOrders.pop()
console.log(teaOrders); // returns elements left after removal

// Soft copy = when you copy a primitive value, it will create a new independent copy. when u copy a non-primitive value, it's reference will be copied and any changes in the new variable will be reflected in the old as it changes the reference types. 
let var1 = 5
let var2 = var1  // a copy is created, not reference
var1 = 90  
console.log(var2, var1);
// array create soft copy
console.log('Challenge - 6');
let popularTeas = ["Green Tea", "Oolong Tea", "Chai"];
let softCopyTea = popularTeas
popularTeas.pop()
console.log(softCopyTea); // reflect the changes in reference and so, in new variable


// Hard copy means an array created which may contain the same values but does not share the reference. Changes in one array do not affect the other.
console.log('Challenge - 7');
let topCities = ["Berlin", "Singapore", "New York"];
let hard_copy_of_topCities = [...topCities]  // hard copy created using spread operator
topCities.pop()
console.log(topCities);
console.log(hard_copy_of_topCities); // change not reflected here
// another way
let hard_copy_of_topCities2 = topCities.slice()
topCities.push('London')
console.log(topCities);
console.log(hard_copy_of_topCities2); // no change appears
// Analogy = Soft Copy: Like two friends sharing one Spotify account. If one removes a song from the playlist, the other also loses it. Hard Copy: Like two separate Spotify accounts. Each person manages their own playlists independently.

// Some more array methods 
// Shift method remove first item and return it
let friends = ['shibu', 'rohit']
let returnFirst = friends.shift()
console.log(returnFirst);
console.log(friends);
// unshift add at the begining and bot return anything
friends.unshift('Pranav')
console.log(friends);
// include() checks if value exists
console.log(friends.includes('shibu'));
// indexof() find position of the element. return -1 if not exists
console.log(friends.indexOf('Pranav'));
// concat() will merge 2 or more arrays into a new one
let teas1 = ["Green Tea", "Chai"];
let teas2 = ["Oolong Tea", "White Tea"];
let total_tea = teas1.concat(teas2)
console.log(total_tea);
console.log(teas1); // does not change original array
let teas3 = ['lemon tea']
let full_tea = teas1.concat(teas2).concat(teas3) // combining 3 arrays
console.log(full_tea);
// join() will convert all arrays to strings
let join_teas1 = teas1.join(' - ')
console.log(join_teas1);
// reverse() will change the array order
let reverse_teas2 = teas2.reverse()
console.log(reverse_teas2);