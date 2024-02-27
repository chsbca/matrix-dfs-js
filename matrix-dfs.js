function SearchingChallenge(strArr) {
    let counter = 0
    let rows = strArr.length
    let columns = strArr[0].length
  
    let arrMatrix = [];
    for (let i = 0; i < rows; i++) {
      arrMatrix.push(strArr[i].split(''));
    }
  
    function zeroCheck(i, j) {
      return i >= 0 && i < rows && j >= 0 && j < columns
    }
  
    const dfs = function (i, j) {
      if (!zeroCheck(i, j) || arrMatrix[i][j] !== '0') {
        return;
      }
  
      arrMatrix[i][j] = '1'
  
      dfs(i - 1, j) // up
      dfs(i + 1, j) // down
      dfs(i, j - 1) // left
      dfs(i, j + 1) // right
    };
  
    //this runs the function
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