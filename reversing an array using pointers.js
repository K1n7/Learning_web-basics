function reverseArray(arr) {
  let left = 0;                // Pointer to the start of the array
  let right = arr.length - 1;  // Pointer to the end of the array

  while (left < right) {
    // Swap elements
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers
    left++;
    right--;
  }

  return arr;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray)); // Output: [5, 4, 3, 2, 1]