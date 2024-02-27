# 0s 1s Searching Challenge (Matrix)

Have the function ``SearchingChallenge(strArr)`` take the array of strings stored in strArr, which will be a 2D matrix 0 and 1's, and determine how many holes, or contiguous region of 0's, exist in the matrix. A contiguous region is one where there is a connected group of 0's going in one or more of four direction: up, down, left, or right. For example: if ``strArr`` is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:

1  1  1  0  1  
1  0  0  0  0  
1  1  1  0  1  
1  1  1  1  1

For the input above, your program should return **2** because there are two separate contiguous regions of 0's, which create "holes" in the matrix. You can assume the input will not be empty.

Examples:
```
Input: ["01111", "01101", "00011", "11110"]
Output: 3
```
```
Input: ["1011", "0010"]
Output: 2
```