//merge two sorted arrays in a single array.

const arr1 = [2, 4, 6, 8, 9];
const arr2 = [1, 3, 4, 5, 9];
const mergedArr = [];

if (arr1.length > 0 || arr2.length > 0) {
  for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {

    if (i < arr1.length && arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++
    }
    else if (j < arr2.length && arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++
    }
    else {
      if (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
      }
      if (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
      }
    }
  }
}

console.log(mergedArr);



//Time Complexity : O(n)
//Space Complexity : O(n)