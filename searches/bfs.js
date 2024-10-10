// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }


// function bfs(root) {
//   if (!root) {
//     return [];
//   }

//   const queue = [root];
//   const result = [];

//   while (queue.length > 0) {
//     const node = queue.shift();
//     result.push(node.value);

//     if (node.left) {
//       queue.push(node.left);
//     }

//     if (node.right) {
//       queue.push(node.right);
//     }
//   }

//   return result;
// }

// // Example tree
// const tree = new Node(1);
// tree.left = new Node(2);
// tree.right = new Node(3);
// tree.left.left = new Node(4);
// tree.left.right = new Node(5);

// console.log(bfs(tree)); // Output: [1, 2, 3, 4, 5]

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Node(value));
    return this;
  }
}

function depthFirstSearch(root) {
  // Empty array to store node values
  const result = [];
  // Define queue
  const queue = [root];
  // Return final array
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === null) continue;
    result.push(current.value);
    for (const child of current.children) {
      queue.push(child);
    }
  }
  return result;
}