import LinkedList from "./linkedList.js";

export default class Node{
    constructor(value){
        this.value = value,
        this.next = null;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;

let list = new LinkedList(node1);

list.prepend(69);
list.append(3);
console.log(list.tail());
console.log(list.size());
console.log(list.at(3));

console.log('---POP---');
list.pop();
console.log(list.tail());

console.log('---CONTAINS---');
console.log(list.contains(9));

console.log('---FIND---');
console.log(list.find(69));

console.log('---TOSTRING---');
console.log(list.toString());

console.log('---INSERT AT---');
list.insertAt(88, 1);
list.insertAt(44, 0);
list.insertAt(29, 5);
console.log(list.toString());

console.log('---REMOVE AT---');
list.removeAt(2);
console.log(list.toString());



