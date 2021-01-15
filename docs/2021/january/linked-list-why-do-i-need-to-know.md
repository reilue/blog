# Linked list and why do i need to know as a Javascript Developer

With arrays we got static & dynamic.

To illustrate lets talks about to take flight to Hawaii, for a week. (something that in 2020 and 2021 we shouldn't do that, but that's for another episode ) we want to take a luggage as portable as possible, so to that we pickup a small backpack possible. 

So we define our capacity to carry thing previously (static arrays), of course with notable drawbacks, what if suddenly and virus becomes a pandemic and airports are lockdown for a couple of months, so you have to carry a lot of things (food, water, clothes, etc), from one location to another in order to fufill regulations.

Now you'll need a bigger backpack, so you purchase it and now have much more capacity.

Dynamic array allows you to do that.

In both cases (Static & Dynamics arrays) we can increase the memory once it hit a certain limit and double up that memory in another location, that operation of doubling up to create more memory had a performance implications. 

Additionally array are not good for insertion and deletion elements within, due it has to shift index each other. 

Hash Tables comes to solve this issues, unfortunately they’re unordered.

So Linked lists comes to the rescue. 

Most computers has caching systems that makes **reading from sequential memory** faster than **reading scattered**, arrays items are always next each others in memory, Linked list are all scattered across memory can of like hash table. So traversal elements in a Linked List is usually quite a bit slower than through items in an array even thou there are technically O(n).

An implementation in ES6 is like **[this](https://repl.it/@eulier1/Data-Structures-Linked-Lists-Implementation-1#index.js)**:

```js
class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    return this.head
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    return this.head
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    const newNode = new Node(value)
    
    const previousNode = this.traversalToIndex(index - 1)
    const currentNode = previousNode.next

    previousNode.next = newNode
    newNode.next = currentNode

    return this.printList();
  }
  remove(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  traversalToIndex(index) {
    const currentNode = this.head
    const counter = 0
    while (counter !== index) {
      currentNode = currentNode.next
      counter++ 
    }
    return currentNode
  }
  reverse() {
    let previous = null
    let current = this.head
    let next = current.next
    while(current) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }
    this.tail = this.head  
    this.head = previous;
    return this.printList();
  }
}
  
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(32);
myLinkedList.prepend(9);
myLinkedList.insert(1, 12)
myLinkedList.reverse()
```

## Recap

Linked-list are a low level data structures, that doesn’t comes built-in in many languages, it’s a very popular, useful data structures and also in questions, when it comes to interview.

Linked-list are **great** for:

- Fast Insertion* 
- Fast Deletion*
- Ordered
- Flexible size

(*) when it comes to do it, at the beginning or at the end of the list. 

**Tradeoff**:
- Slow lookup
- More memory

### Applications of linked list in computer science

- Implementation of stacks and queues
- Implementation of graphs : Adjacency list representation of graphs is most popular which is uses linked list to store adjacent vertices.
- Dynamic memory allocation : We use linked list of free blocks.
- Maintaining directory of names
- Performing arithmetic operations on long integers
- Manipulation of polynomials by storing constants in the node of linked list
representing sparse matrices


### Applications of linked list in real world
- Image viewer – Previous and next images are linked, hence can be accessed by next and previous button.
- Previous and next page in web browser – We can access previous and next url searched in web browser by pressing back and next button since, they are linked as linked list.
- Music Player – Songs in music player are linked to previous and next song. you can play songs either from starting or ending of the list.

Sources:
- https://academy.zerotomastery.io/p/master-the-coding-interview-data-structures-algorithms
- https://www.geeksforgeeks.org
