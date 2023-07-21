/**
 * Sorts an array using the bubble sort algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
exports.bubbleSort = function bubbleSort(arr) {
  try {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be an array");
    }
    
    // Copy the array to avoid modifying the original array
    const sortedArr = [...arr];
    
    // Perform bubble sort
    const n = sortedArr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          // Swap elements
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;
        }
      }
    }
    
    return sortedArr;
  } catch (error) {
    // Log and handle the error
    console.error("Error:", error.message);
    return [];
  }
}

/**
 * Sorts an array using the merge sort algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
exports.mergeSort = function mergeSort(arr) {
  // Base case: if the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

/**
 * Merges two sorted arrays into a single sorted array.
 * 
 * @param {Array} leftArr - The left sorted array.
 * @param {Array} rightArr - The right sorted array.
 * @returns {Array} - The merged sorted array.
 */
function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both arrays and add the smaller element to the result
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add the remaining elements from the left array
  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }
  
  // Add the remaining elements from the right array
  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }
  
  return result;
}

/**
 * Sorts an array using the selection sort algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
exports.selectionSort = function selectionSort(arr) {
  try {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be an array");
    }

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;

      // Find the minimum element in the remaining unsorted part of the array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      // Swap the minimum element with the current element
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    return arr;
  } catch (error) {
    // Log the error
    console.error("Error:", error);
    return [];
  }
}

/**
 * Sorts an array using the Insertion Sort algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
exports.insertionSort = function insertionSort(arr) {
  try {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      throw new TypeError('Input must be an array');
    }
    
    // Perform insertion sort
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      arr[j + 1] = key;
    }
    
    return arr;
  } catch (error) {
    // Log the error
    console.error('Error:', error.message);
    return [];
  }
}