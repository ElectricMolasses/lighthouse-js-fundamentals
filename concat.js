function concat(arr1, arr2) {
  var newArr = arr1.slice(0, arr1.length);

  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr;
}

console.log(concat([1, 3, 2], [4, 5, 6]));