exports.dateCompare = function(dateToCheck, howManyDaysAgo) {
  var today = new Date();
  var dynoDate = new Date();
  dynoDate.setDate(dynoDate.getDate() - howManyDaysAgo);
  var checkDate = Date.parse(dynoDate);
  var inDate = Date.parse(dateToCheck);
  if (checkDate >= inDate) {
    return true;
  } else {
    return false;
  }
}