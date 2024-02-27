function SearchingChallenge(strArr) {
    //setting parameters, counter will be what's returned, which is what's required
    //rows and columns will be used to make sure my dfs function doesn't call when past the matrix's boundary
    let counter = 0
    let rows = strArr.length
    let columns = strArr[0].length
  
    //grabbing the input and creating a matrix
    let arrMatrix = [];
    for (let i = 0; i < rows; i++) {
      arrMatrix.push(strArr[i].split(''));
    }
  
    //this function checks if the index is a 0 and within bounds of the matrix, if yes, returns true. used to make the later dfs function work
    function zeroCheck(i, j) {
      return i >= 0 && i < rows && j >= 0 && j < columns
    }
  
    //base case
    //creating a function to be called later
    //if zeroCheck function returns false OR arrMatrix current index isn't zero, it does nothing. so 1s and undefineds don't make the function work
    const dfs = function (i, j) {
      if (!zeroCheck(i, j) || arrMatrix[i][j] !== '0') {
        return; //cuts the recursion
      }
  
      //marks visited regions
      //converting 0s to 1s let me make sure that my program won't count the same zero like back and forth
      arrMatrix[i][j] = '1'
  
      //recursions are executed to check everywhere around the current index
      //all directions are important in cases like 
      /*
      10001
      10111
      10001
      11101
      10101
      10001
      where it goes in every direction
      */
      dfs(i - 1, j) // up
      dfs(i + 1, j) // down
      dfs(i, j - 1) // left
      dfs(i, j + 1) // right
    };
  
    //everything is set, to this is where and what is executed
    //for loop to go thru each row. then for each row, it goes thru each column. tldr top to bottm, left to right
    //only executes if current index is 0. if 0, it adds 1 to the counter because that's one region
    //then does the dfs to mark all adjacent 0s to 1s
    //once the dfs function hits the boundary (hits 1s or out of bounds) and finds no more zeros, it goes back to the top of the for loop
    //finds the next zero and does the dfs recursion all over again
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (arrMatrix[i][j] === '0') {
          counter++
          dfs(i, j)
        }
      }
    }
  
    console.log(counter)
  }
  
  // test cases
  SearchingChallenge(["01111", "01101", "00011", "11110"]) // 3
  SearchingChallenge(["1011", "0010"]) // 2
  SearchingChallenge(["01", "01"]) // 1
  SearchingChallenge(["01", "10"]) // 2

  // node matrix-dfs.js