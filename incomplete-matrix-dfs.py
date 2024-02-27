def searching_challenge(str_arr):
    # Setting parameters
    counter = 0
    rows = len(str_arr)
    columns = max(len(x) for x in str_arr)  # Finding the longest string in the array
    
    # Creating a matrix from the input array
    arr_matrix = [list(row) for row in str_arr]
    
    # Function to check if the index is within the bounds of the matrix and is '0'
    def zero_check(i, j):
        return i >= 0 and i < rows and j >= 0 and j < len(arr_matrix[i]) and arr_matrix[i][j] == '0'
    
    # Depth-First Search (DFS) function to mark connected '0's as '1's
    def dfs(i, j):
        if not zero_check(i, j):
            return
        
        arr_matrix[i][j] = '1'  # Marking the current '0' as '1'
        
        # Recursively checking adjacent cells
        dfs(i - 1, j)  # Up
        dfs(i + 1, j)  # Down
        dfs(i, j - 1)  # Left
        dfs(i, j + 1)  # Right
    
    # Iterating through each cell in the matrix
    for i in range(rows):
        for j in range(len(arr_matrix[i])):
            if arr_matrix[i][j] == '0':
                counter += 1  # Found a new region of '0's
                dfs(i, j)  # Mark all connected '0's as '1's
    
    return counter

# Test cases
test_case_1 = ["01111", "01101", "00011", "11110"]
test_case_2 = ["1011", "0010"]

result_1 = searching_challenge(test_case_1)
result_2 = searching_challenge(test_case_2)

result_1, result_2
