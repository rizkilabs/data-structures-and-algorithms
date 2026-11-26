// Find the largest number in an array using a single loop.
// Time complexity: O(n), Space complexity: O(1)
function findLargest(numbers) {
  // Handle empty or invalid input
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  // Start with the first element as the current largest
  let largest = numbers[0];

  // Compare each remaining element with the current largest
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

// Simple test cases
console.log(findLargest([12, 45, 7, 89, 23])); // 89
console.log(findLargest([-5, -2, -9])); // -2 (all negative)
console.log(findLargest([42])); // 42 (single element)
console.log(findLargest([7, 7, 7])); // 7 (duplicates)
console.log(findLargest([])); // null (empty array)
