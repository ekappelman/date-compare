exports.dateCompare = function(dateToCheck, howManyDaysAgo) {
  var today = new Date();
  var dynoDate = new Date();
  dynoDate.setDate(dynoDate.getDate() - howManyDaysAgo);
  var checkDate = Date.parse(dynoDate);
  var inDate = Date.parse(dateToCheck);
  console.log(checkDate);
  console.log(inDate);
  if (checkDate >= inDate) {
    console.log("BEFORE");
    return true;
  } else {
    console.log("AFTER");
    return false;
  }
}