/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
// eslint-disable-next-line max-classes-per-file
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
// eslint-disable-next-line linebreak-style
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(element) {
    // debugger;
    const node = new ListNode(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  drew() {
    const result = [];
    let temp = this.head;
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    console.log(result.join(' => '));
  }

  getFirst() {
    return this.head;
  }

  reverse() {
    let perv = null;
    let next = null;
    let currnt = this.head;
    while (currnt !== null) {
      next = currnt.next;
      currnt.next = perv;
      perv = currnt;
      currnt = next;
    }
    return perv;
  }

  remove(k) {
    debugger;
    let count = 0;
    let current = this.head;
    while (current.next) {
      if (count === k - 2) {
        current.next = null;
        break;
      }
      current = current.next;
      count++;
    }
  }
}
const node1 = new ListNode('item1');
const node2 = new ListNode('item2');
// const node3 = new ListNode('item3');
node1.next = node2;
const list = new LinkedList(node1);

console.log(list);
list.add(3);
console.log(list);
list.remove(4);
console.log(list);
