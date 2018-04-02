// Code your solution in this file!
function logDriverNames(array){
  for( property1 in array){ console.log(array[property1].name);}
}
// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }
// logDriverNames() — Receives an array of driver objects and
//   logs the name attribute of each driver to the console.
function logDriversByHometown(array,location){
  for(property1 in array) {
    if (array[property1].hometown === location){
        console.log(array[property1].name)
    }
  }
}
// logDriversByHometown() — Receives an array of driver objects as the first argument
//   and a location as the second argument.
//   The function logs to the console the name attribute of each driver
//     whose hometown matches the string passed in as the 'location' argument.
function driversByRevenue(array){
  let array1 = array.slice(0)
  return array1.sort(function(a,b){return a.revenue-b.revenue})
    // test doesnt like the above
    // get     expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(driversCopy);
    //got around it
}
// driversByRevenue() — Receives an array of driver objects and
//   returns a new array of driver objects sorted by their revenue attribute
//     from lowest to highest.
function driversByName(array){
  let array1 = array.slice(0)
  return array1.sort(function(a,b){return a.name.localeCompare(b.name)})
}
// driversByName() — Receives an array of driver objects and
//   returns a new array of driver objects sorted by their name attribute from A to Z.
//   Here, you may have to use the String.prototype.localeCompare() method.
function totalRevenue(array){
  let sum = 0
   for(const property1 in array){ sum += array[property1].revenue}
   return sum
}
// totalRevenue() — Receives an array of driver objects and
//   returns the sum of the revenue earned by each driver.
function averageRevenue(array){
  return totalRevenue(array)/array.length
}
// averageRevenue() — Receives an array of driver objects and
//   returns the average revenue earned by each driver.
