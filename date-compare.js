exports.dateCompare = function(dateToCheck, howManyDaysAgo) {
  var today = new Date();
  var dynoDate = new Date();
  dynoDate.setDate(dynoDate.getDate() - howManyDaysAgo);
  console.log(dynoDate);
  console.log(dateToCheck);
  if (dynoDate >= dateToCheck) {
    console.log("BEFORE");
    return true;
  } else {
    console.log("AFTER");
    return false;
  }
}