// Code your solution in this file!
const logDriverNames = function (arr){
  arr.forEach(function (el, i , arr){
    console.log( el.name);
  })
}
const logDriversByHometown = function (arr, hometown) {
  arr.forEach(function (el, i , arr){
    if (el.hometown === hometown){
      console.log( el.name);
    }
  })
}
const driversByRevenue = function(arr){
  const newArr = arr.slice()
  return newArr.sort(function (d, b) {
    return d.revenue - b.revenue;
    })
}
const driversByName = function(arr){
  const newArr = arr.slice()
  return newArr.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}
const totalRevenue = function(arr){
  function cb (agg, el, i, arr){
    console.log('The aggregate up to this point is:', agg);
    return agg + el.revenue;
  }
  return arr.reduce(cb, 0)

}
function averageRevenue(arr){
  return totalRevenue(arr)/arr.length
}
