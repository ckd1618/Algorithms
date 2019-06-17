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
    //create an insert function, check root
    //create a while(true) and check left and right for the spot, and return when you put it
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        current = this.root;
        while (true) {
            if (value < current.value) {
                current = current.left;
                if (current.value === null) {
                    current.left = newNode;
                    return this;
                }
                continue;
            } else if (value > current.value) {
                current = current.right;
                if (current.value === null) {
                    current.right = newNode;
                    return this;
                }
                continue;
            } else {
                return this;
            }
        }
    }
}