# Find the Largest Number

A simple JavaScript program that finds the largest number in an array
without using `Math.max()`.

## Concepts

- Array
- Looping
- Comparison

## Requirements

- Do not use `Math.max()`
- Use a loop
- Handle an empty array
- Time complexity: O(n)

## How It Works

1. If the input is empty or not an array, return `null`.
2. Assume the first element is the largest.
3. Loop through the remaining elements and update the largest value
   whenever a bigger number is found.
4. Return the largest value.

## Usage

```bash
node findLargest.js
```

## Example

```
Input:  [12, 45, 7, 89, 23]
Output: 89
```

## Edge Cases

| Input          | Output | Note                 |
| -------------- | ------ | -------------------- |
| `[]`           | `null` | Empty array          |
| `[42]`         | `42`   | Single element       |
| `[-5, -2, -9]` | `-2`   | All negative numbers |
| `[7, 7, 7]`    | `7`    | Duplicate values     |

## Complexity

- **Time:** O(n), the array is traversed once
- **Space:** O(1), only one extra variable is used
