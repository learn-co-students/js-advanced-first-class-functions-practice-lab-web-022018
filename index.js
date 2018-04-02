function logDriverNames(drivers){
	drivers.forEach(function (driver) {console.log(driver.name)})
}

function logDriversByHometown(drivers, town){
	drivers.forEach(function (driver) {
		if (driver.hometown === town){
			console.log(driver.name)
		}
	}
	)
}

function driversByRevenue(drivers){
	return drivers.slice().sort(function (driver1, driver2) {return driver1.revenue - driver2.revenue})
}

function driversByName(drivers){
	return drivers.slice().sort(function (driver1, driver2) {return driver1.name.localeCompare(driver2.name)})
}

function totalRevenue(drivers){
	return drivers.slice().reduce(function (agg, el, i, arr) {return agg + el.revenue}, 0)
}

function averageRevenue(drivers){
	return totalRevenue(drivers)/drivers.length
}