// Code your solution in this file!
const logDriverNames = function (driverArray) {
  for (const driver of driverArray){
    console.log(driver['name'])}}
const logDriversByHometown = function (driverArray, hometown) {
  for (const driver of driverArray){
    if (driver['hometown']===hometown){
      console.log(driver['name'])}}}
const driversByRevenue = function (driverArray) {
  //sort() function takes in a comparison function
  return driverArray.slice().sort(function (a,b) {
    //compares a's revenue with b's
    return a.revenue - b.revenue})}
const driversByName = function (driverArray){
  return driverArray.slice().sort(function (a,b){
    //localeCompare method returns a number indicating
    //whether a reference string comes before or after
    //or is the same as the given string in sort order.
    return a.name.localeCompare(b.name)})}
const totalRevenue = function (driverArray) {
  let sum = 0
  for (const driver of driverArray){
    sum += driver[`revenue`]} return sum}
const averageRevenue = function (driverArray) {
  let size = driverArray.length
  return (totalRevenue(driverArray)/size)
}
