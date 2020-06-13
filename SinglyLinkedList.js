/**
 * @class Node
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @class SinglyLinkedList
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * @description Inserts value in the SinglyLinkedList.
   * @param {*} value
   */
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * @description remove value from the SinglyLinkedList.
   */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let temp = this.head;

    while (current.next) {
      temp = current;
      current = current.next;
    }

    this.tail = temp;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /**
   * @description Insert value at the begining.
   */
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  /**
   * @description Remove node from the beginning.
   */
  shift() {
    if (!this.head) return undefined;
    let prevHead = this.head;
    this.head = prevHead.next;
    this.length--;
    return prevHead;
  }

  /**
   * @description get value at the particular index of LinkedList.
   * @param {number} index
   */
  get(index) {
    if (this.length <= 0 && this.length < index) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /**
   * @description set value at the particular index of LinkedList.
   * @param {number} index
   * @param {number} val
   */
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode = val;
      return true;
    }
    return false;
  }

  /**
   * @description remove value at the particular index of LinkedList.
   * @param {number} index
   */
  remove(index) {
    if (this.length <= 0 && this.length < index) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removedNode = prev.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  /**
   * @description Reverse LinkedList.
   */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i <= this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  /**
   * @description Print LinkedList.
   */
  print() {
    var arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}
list = new SinglyLinkedList();
