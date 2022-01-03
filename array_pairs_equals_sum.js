//Google mock interview question

//check if a sorted group of numbers consist of a pair that constitutes to a specific sum. If yes return true else retur fale.

//----Naive approach---//

let arr1 = [1,4,5,7,9];
let sum = 8;

function checkPairsEqualsSum()
{
  for(let i in arr1)
  {
    let num = arr1[i];
    for(let j in arr1)
    {
      if(i != j && (arr1[i] + arr1[j] === sum))
      {
        return true;
      }

    }
  }

  return false;
}

//console.log(checkPairsEqualsSum());

//Time Complexity - O(n^2)
//Space Complexity - O(1)

//-------------------------------------------------------------

//Better approach

function checkPairsEqualsSum1()
{
  for(var i = 0, j = arr1.length-1 ; i < j ; )
  {
    let s = arr1[i] + arr1[j];
    if(s === sum)
    {
      return true;
    }

    if(s > sum)
    {
      j--;
    }
    else
    {
      i++;
    }
  }

  return false;
}

//console.log(checkPairsEqualsSum1());

//Time Complexity - O(n)
//Time Complexity - O(1)