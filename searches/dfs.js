class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function dfs(node, target) {
  if (node.value === target) {
    return node;
  }

  for (const child of node.children) {
    const result = dfs(child, target);
    if (result) {
      return result;
    }
  }

  return null;
}

// Create a tree
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);
node3.addChild(node6);

// Perform DFS
const targetValue = 5;
const foundNode = dfs(root, targetValue);

// if (foundNode) {
//   console.log("Found node:", foundNode.value);
// } else {
//   console.log("Node not found");
// }

var tree = {
  _id: 1,
  name: "Root Node",
  children: [
    {
      _id: 2,
      name: "Child 1",

    },
    {
      _id: 3,
      name: "Child 2",

      children: [
        {
          _id: 2,
          name: "Grandchild",

        }
      ]
    },
    {
      _id: 4,
      name: "Child 3",

    }
  ]
}


function* dfs2(node) {
  yield node;
  if (Array.isArray(node.children)) {
    for (let child of node.children) {
      yield* dfs2(child);
    }
  }
}

for (let node of dfs2(tree)) {
  let value = node.name
  if (value == "Grandchild") {
    console.log("Found");
    console.log(node.name);
    break;
  } else {
    console.log(node.name);
  }

}