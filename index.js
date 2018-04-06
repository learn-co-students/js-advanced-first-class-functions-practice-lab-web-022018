// Code your solution in this file!
const logDriverNames = function(driver)
{
  driver.forEach(function (driver)
  {
    console.log(driver.name)
  });
}

const logDriversByHometown = function(drivers, town)
{
  drivers.forEach(function (driver)
  {
  if(driver.hometown === town)
    {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivObj)
{
  return drivObj.slice().sort(function (driv1, driv2)
  {
    return driv1.revenue - driv2.revenue;
  });
}

const driversByName = function(driver)
{
return driver.slice().sort(function(driv1, driv2)
  {
  return driv1.name.localeCompare(driv2.name);
});
}

const totalRevenue = function(driver)
{
  return driver.reduce(function(total, currentDriver)
  {
  return currentDriver.revenue +total;

}, 0);
}

function averageRevenue(driver)
{
  return totalRevenue(driver) / driver.length;
}
