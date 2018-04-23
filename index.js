// Code your solution in this file

function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

// function findMatching (drivers, name) {
//   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
// }

function fuzzyMatch (drivers, name) {
  let nameLength = name.length
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === name
  });
}

// function matchName (drivers, name) {
//   let matches = []
//   for (const element of drivers) {
//       //debugger;
//       if (element.name.toLowerCase() === name.toLowerCase()) {
//         matches.push(element)
//       }
//   }
//   return matches
// };

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
