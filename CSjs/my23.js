class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

//create a BST, in constructor set root to null
class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		var newNode = new Node(value); //create newNode
		if (this.root === null) { //check if root is null
			this.root = newNode; //if so this.root === newNode
			return this;
		}
		var current = this.root; //create current
		while (true) { //create an infinite loop, and we will return in its midst once newNode is set to current.left or right
			if (value < current.value) { //first check to see if the current.value is < or >
				if (current.left === null) { //then check to see ahead if left is null
					current.left = newNode; // if it is, store it there and return
					return this;
				}
				current = current.left; //if left is not null, then make that ur new current and continue looping
				continue;
			} else if (value > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
				continue;
			} else {
				return this;
			}
		}
	}

	find(value) {
		if (this.root === null) {
			return false;
		}
		var current = this.root;
		while (current) {
			if (value < current.value) {
				current = current.left;
				continue;
			} else if (value > current.value) {
				current = current.right;
				continue;
			} else {
				return current;
			}
		}
		return false;
	}

	remove(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match, get to work!

				//Option 1: No right child: 
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {

						//if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;

							//if parent < current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {

						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {

					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
		return false;
	}

	DFSInOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(15);
tree.insert(13);
tree.insert(17);
// console.log(tree.DFSPreOrder());
// console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
console.log(tree.find(17));
tree.remove(17)
console.log(tree.find(17));



	// remove(value) {

	//     if (this.root === null) {
	//         return false;
	//     }
	//     var current = this.root;
	//     var parent = null;
	//     while (current) {
	//         if (!current) return false;
	//         if (value < current.value) {
	//             parent = current;
	//             current = current.left;
	//             continue;
	//         } else if (value > current.value) {
	//             parent = current;
	//             current = current.right;
	//             continue;
	//         } else {
	//             break; //val = current.val , you found the node
	//         }
	//     }


	//     if (!current.left && !current.right) {
	//         current = null;
	//         return parent;
	//     } else if (current.left && !current.right) {
	//         if (parent.left === current) {
	//             parent.left = current.left;
	//         }else{
	//             parent.right =current.left;
	//         }
	//         current = null;
	//         return this;
	//     } else if (!current.left && current.right) {
	//         if (parent.left === current) {
	//             parent.left = current.right;
	//         }else{
	//             parent.right =current.right;
	//         }
	//         current = null;
	//         return this;
	//     }else { //current has both children
	//         var replacement = null;
	//         while (true) {

	//         }
	//     }

	// }