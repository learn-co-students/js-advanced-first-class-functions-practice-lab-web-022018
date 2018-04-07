// Code your solution in this file!
const logDriverNames = function(drivers){

drivers.forEach(function(driver){console.log(driver.name)})
}


const logDriversByHometown = function(drivers,hometown){
  drivers.forEach(
    function(driver){
      if (driver.hometown === hometown){
        console.log(driver.name)
      }
    }
  )
}

const driversByRevenue = function(drivers){

   let newArray = drivers.slice().sort(function(driver1,driver2){return driver1.revenue - driver2.revenue})
  return newArray
}

const driversByName =  function(drivers){
  let newArray = drivers.slice().sort(function(driver1,driver2){return driver1.name.localeCompare(driver2.name)})
  return newArray
}

const totalRevenue = function(drivers){

  let total = drivers.reduce(function(total,driver){return total +=driver.revenue},0)
  return total
}

const averageRevenue =function(drivers){return totalRevenue(drivers)/drivers.length}
