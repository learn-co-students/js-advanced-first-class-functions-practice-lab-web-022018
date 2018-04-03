// Code your solution in this file!
const logDriverNames = function(drivers) {

  drivers.forEach(driver => console.log(driver["name"]))

}


function logDriversByHometown(drivers, location) {


  drivers.forEach(function(driver) {
    if (driver["hometown"] === location) {
      console.log(driver["name"])
    }
  })
}


function driversByRevenue(drivers) {

  return drivers.slice().sort(function (a, b) {

    return a.revenue - b.revenue
      })
  }


  function driversByName(drivers) {

    return drivers.slice().sort(function (a, b) {

      return a.name.localeCompare(b.name)
    })
  }


  function totalRevenue(drivers) {

    return drivers.reduce(function (agg, el, i, arr) {

      return agg + el.revenue
    }, 0)
  }


  function averageRevenue(drivers) {
    
    return totalRevenue(drivers) / drivers.length
  }
