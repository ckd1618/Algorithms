class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value); //create a node using the passed in value
    if (!this.root) { //check to see if a root node is already in place
      this.root = newNode; //if not, then set the newNode made above to the root
    } else { // if a root node already exists
      var current = this.root; //set the root to the variable current so that we an traverse the node before storing the newNode
      while (true) { // an endless loop to traverse a tree of unknown length
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode; //you only want to store if it is both less than and there is no node at current.left
            return this; //ends the function
          }
          current = current.left; //but if a node is at current.left, then shift current down to current.left and re-enter the while loop
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  loopkup(value) {
    if (!this.root) {
      return false;
    }
    var current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (value === current.value) {
        return current;
      }
    }
    return null;
  }

  // remove(value) {
  //   if (!this.root) return false;
  //   var current = this.root;
  //   var parent = null;
  //   while (current) {
  //     if (value === current.value)
  //   }
  // }
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(traverse(tree.root));
console.log(traverse(tree.loopkup(4)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = (node.left === null) ? null : traverse(node.left);
  tree.right = (node.right === null) ? null : traverse(node.right);
  return tree;
}
