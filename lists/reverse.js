class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev forward
    current = next; // Move current forward
  }

  return prev; // New head of the reversed list
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original list:");
printList(head);

head = reverseLinkedList(head);

console.log("Reversed list:");
printList(head);

function printList(node) {
  let result = "";
  while (node) {
    result += node.value + " -> ";
    node = node.next;
  }
  console.log(result + "null");
}