// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element){console.log(element.name)})
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(element) {
    if (element.hometown === hometown) {
      console.log(element.name)
    }
  })
}

function driversByRevenue(drivers) {
  const output = [...drivers]
  return output.sort(function(a, b){
    return (a.revenue - b.revenue)
  })
}

function driversByName(drivers) {
  const output = [...drivers]
  return output.sort(function(a, b){
    return (a.name).localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (aggregator, element) {
    return aggregator + element.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
