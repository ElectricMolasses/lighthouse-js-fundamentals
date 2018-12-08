function merge(arr1, arr2) {
  var newArr = arr1.slice(0, arr1.length);

  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  newArr.sort((x, y) => x > y);

  return newArr;
}

console.log(merge([4, 5, 6], [1, 3, 2]));