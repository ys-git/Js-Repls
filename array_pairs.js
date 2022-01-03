const arr = [2, 4, 5, 6, 1, 7, 3];
var num;

for (n in arr) {
  num = arr[n];
  for (k in arr) {
    if (k != arr.length - 1 && num != arr[k]) {
      console.log(num + "," + arr[k++]);
    }
  }

  console.log("---------------------------------");
}

//Time Complexity : O(n)
//Space Complexity : O(1)