// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, city) {
  drivers.forEach(function(driver) {
    if(driver.hometown === city){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  // spread operator
  return [...drivers].sort(function(a, b){
    return a.revenue-b.revenue
})
}

function driversByName(drivers) {
  return [...drivers].sort(function(a,b){
    return a.name>b.name
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
