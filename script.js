function mincost(arr) { 
  // Base case: if only one rope, cost is 0
  if (arr.length <= 1) return 0;

  let cost = 0;

  // Keep combining ropes until one remains
  while (arr.length > 1) {
    // Sort ropes in ascending order
    arr.sort((a, b) => a - b);

    // Pick two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Combine them — cost = sum
    let newRope = first + second;
    cost += newRope;

    // Add the new rope back
    arr.push(newRope);
  }

  return cost;
}

// Example input
let arr = [1, 2, 3, 4, 5];

// Show result
alert("Minimum cost to connect ropes: " + mincost(arr));
