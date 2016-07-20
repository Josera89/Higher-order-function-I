var map = function (array, cb) {
 var newArray = [];
 for (i = 0; i < array.length; i++) {
  //console.log(array[i]);
  newArray.push(cb(array[i]));
  }
  console.log(newArray);
};



map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
