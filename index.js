// Code your solution in this file!


function logDriverNames(array_of_drivers_in_objects){

   array_of_drivers_in_objects.forEach((each_object)=>{
     console.log(each_object.name)
   })
}

function logDriversByHometown(array_of_drivers_in_objects, hometown){
   array_of_drivers_in_objects.forEach((each_object)=>{
     if (each_object.hometown === hometown){
         console.log(each_object.name)
     }
   })
}

function driversByRevenue(array_of_drivers_in_objects){
   //MAKE A NEW CLONE TO AVOID BEING DESTRUCTIVE
   let clone = array_of_drivers_in_objects.slice(0)

   return clone.sort((a, b)=>{
     return a.revenue - b.revenue
   })
}

function driversByName(array_of_drivers_in_objects){
  let clone = array_of_drivers_in_objects.slice(0)

  return clone.sort((a, b)=>{
    return a.name.localeCompare(b.name)
  })
}


function totalRevenue(array_of_drivers_in_objects){

 let revenues = array_of_drivers_in_objects.map((each_object)=>{
     return each_object.revenue
 })
 revenues = revenues.reduce((a,b)=> a+b)
 return revenues
}

function averageRevenue(array_of_drivers_in_objects){
  let revenues = array_of_drivers_in_objects.map((each_object)=>{
      return each_object.revenue
  })
  sum = revenues.reduce((a,b)=> a+b)
  return sum/revenues.length
}
