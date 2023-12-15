

function selectionSort(arr) {

  // Copy the original array
  const copyArr = [...arr];

  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty...
  while (copyArr.length > 0) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minInd = 0
    let i = 1;

    while (i < copyArr.length) {
      if (copyArr[i] < copyArr[minInd]) {
        minInd = i;
      }

      i++;
    }

    // Save and remove the value at the min index
    let min = copyArr[minInd];

    for (let j = minInd; j < copyArr.length - 1; j++) {
      copyArr[j] = copyArr[j + 1];
    }

    copyArr.pop();

    // Add the min value to the end of the sorted array
    sorted.push(min);
  }

  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minInd = divider;
    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minInd]) {
        minInd = i;
      }
    }

    // Save the min value
    const min = arr[minInd];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minInd - 1; i >= divider; i--) {
      arr[i + 1] = arr[i];
    }

    // Put the min value at the divider
    arr[divider] = min;

    // Increment the divider and repeat
    divider++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
