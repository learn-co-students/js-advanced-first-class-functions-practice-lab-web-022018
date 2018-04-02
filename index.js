// Code your solution in this file!
function logDriverNames(drivers) {
  const callback = function (el, i, arr) {
    console.log(el.name);
  };
  return drivers.forEach(callback);
}

function logDriversByHometown(drivers, town) {
  const callback = function(el, i, arr) {
    if (el.hometown === town) {
      console.log(el.name)
    }
  };
  return drivers.forEach(callback)
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b) {return a.revenue - b.revenue})
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b){return (a.name).localeCompare(b.name)})
}

function totalRevenue(drivers) {
  const callback = function(agg, el, i, arr) {
    return agg + el.revenue
  }
  return drivers.reduce(callback, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
