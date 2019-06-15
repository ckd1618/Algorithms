class Node(object):
	def __init__(self, data):
		self.data = data
		self.nextNode = None

class LinkedList(object):
	def __init__(self):
		self.head = None
		self.size = 0

	# O(1)
	def insertStart(self, data):
		
		newNode = Node(data)
		if not self.head:
			self.head = newNode
		else:
			newNode.nextNode = self.head
			self.head = newNode

		self.size = self.size +1

	# O(N)
	def printList(self):
		current = self.head
		myList = []
		while current:
			myList.append(current.data)
			current = current.nextNode
		return myList

	# O(N)
	def remove(self, data):
		if not self.head:
			return
		current = self.head
		previous = None
		while current.data != data:
			previous = current
			current = current.nextNode

		if not previous:
			self.head = current.nextNode
		else:
			previous.nextNode = current.nextNode
		current = None

		self.size = self.size -1
		
	def insertEnd(self, data):
		self.size = self.size+1
		newNode = Node(data)
		if self.head is None:
			self.head = newNode
			return
		current = self.head
		while current.nextNode != None:
			current = current.nextNode
		current.nextNode = newNode

	def reverse(self):
		if self.head is None:
			return
		current = self.head
		previous = None
		while current is not None:
			next = current.nextNode
			current.nextNode = previous
			previous = current
			current = next
		
		self.head = previous








linked1 = LinkedList()
linked1.insertStart(10)
linked1.insertStart(20)
linked1.insertStart(30)
linked1.insertStart(40)
linked1.insertStart(50)
linked1.remove(30)
linked1.insertEnd(30)
print(linked1.printList())
# print(linked1.size)
linked1.reverse()
print(linked1.printList())

# linked2 = LinkedList()
# linked2.insertEnd(33)
# print(linked2.printList())
