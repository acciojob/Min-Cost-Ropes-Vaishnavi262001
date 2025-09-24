function mincost(arr)
{ 
//write your code here
// return the min cost
	
 let cost = 0;
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    let first = arr.shift();
    let second = arr.shift();
    let newRope = first + second;
    cost += newRope;
    arr.push(newRope);
  }
  return cost;
}
  let arr = [1, 2, 3, 4, 5];  // ✅ define the array here
    alert(mincost(arr));  

