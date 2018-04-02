// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (el, i , arr) {
    console.log(el["name"]);
  }
)
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (el) {
    if (el["hometown"] === hometown) {
      console.log(el["name"])
    }
  })
}

function driversByRevenue(drivers) {
  var sorted = drivers.slice()
  return sorted.sort(function (a,b) {
    return a.revenue - b.revenue ;
  })
}

function driversByName(drivers) {
  var sorted = drivers.slice()
  return sorted.sort(function (a,b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (acc, value) {
    return acc + value["revenue"]
  }, 0)
}

function averageRevenue(drivers) {
  return drivers.reduce(function (acc, value) {
    return acc + value["revenue"]
  }, 0)/(drivers.length)
}
