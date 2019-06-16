class Node:
	def __init__(self, data):
		self.data = data
		self.leftNode = None
		self.rightNode = None

class bst:
	def __init__(self):
		self.root = None
	
	def insert(self, data):
		newNode = Node(data)
		if self.root is None:
			self.root = newNode
			return
		
		current = self.root
		previous = None
		while current is not None:
			if  data < current.data:
				previous = current
				current = current.leftNode
				continue
			elif data > current.data:
				previous = current
				current = current.rightNode
				continue
			else:
				return
		if data < previous.data:
			previous.leftNode = newNode
		else:
			previous.rightNode = newNode
		
	def traverse(self):
		if self.root is None:
			return
		mylist = []
		current = self.root
		def loop(current)
			if current.leftNode is not None:
				current = current.leftNode
				loop(current)
			else:
				return current.data
		
		
		

bst1 = bst();
bst1.insert(10);
bst1.insert(13);
bst1.insert(5);
bst1.insert(14);


bst1.traverse();			
		
