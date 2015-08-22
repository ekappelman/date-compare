exports.dateCompare = function(howManyDaysAgo) {
  var today = new Date();
  var dynoDate = new Date();
  dynoDate.setDate(dynoDate.getDate() - howManyDaysAgo);
  if (today >= howManyDaysAgo) {
    console.log("BEFORE");
    return true;
  } else {
    console.log("AFTER");
    return false;
  }
}