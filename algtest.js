function Sll(){
	this.head = null;
}
function Node(val) {
	this.value = val;
	this.next = null;
}
var mysll = new Sll();
var node1 = new Node(5);
var node2 = new Node(10);
var node3 = new Node(15);
var node4 = new Node(20);
var node5 = new Node(25);
var node6 = new Node(30);
var node7 = new Node(35);

mysll.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(node5.value);

console.log('hi');



