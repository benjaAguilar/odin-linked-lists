import Node from "./index.js";

export default class LinkedList{
    constructor(head = null){
        this.head = head
    }

    append(value) {
        let node = new Node(value);
        let lastNode = this.tail();
        lastNode.next = node;
    }

    prepend(value){
        let node = new Node(value);
        let prevNode = this.head;
        this.head = node;
        node.next = prevNode; 

    }

    size(){
        let size = 1;
        let nodeList = this.head;
        while(nodeList.next != null){
            nodeList = nodeList.next;
            size++;
        }
        return size;
    }

    head(){
        return this.head
    }

    tail(){
        let nodeList = this.head;
        while(nodeList.next != null){
            nodeList = nodeList.next;
        }
        return nodeList;
    }

    at(index){
        let nodeIndex = 0;
        let node = this.head;
        while(nodeIndex != index && node.next != null){
            node = node.next;
            nodeIndex++;
        }

        if(nodeIndex != index) return undefined;

        return node
    }

    pop(){
        let node = this.head;
        if (!node) {
            return;
        }

        if (node.next === null) {
            this.head = null;
            return;
        }

        while (node.next.next !== null) {
            node = node.next;
        }
        node.next = null;
    }

    contains(val){
        let node = this.head;
        while(node.value != val && node.next != null){
            node = node.next;
        };
        return node.value === val ? true : false;

    }

    find(val){
        let index = 0;
        let node = this.head;
        while(node.value != val && node.next != null){
            node = node.next;
            index++;
        }
        return node.value === val ? index : undefined;
    }

    toString(){
        let node = this.head;
        let string = '[Head]';
        while(node.next != null){
            string += `(${node.value}) -> `;
            node = node.next;
        }
        string += `(${node.value}) -> null`;
        return string;
    }

    insertAt(val, index){
        let displacedNode = this.at(index);
        let prevNode = this.at(index - 1);

        if(index === 0){
            this.prepend(val);
            return;
        }

        if(displacedNode === undefined){
            this.append(val);
            return;
        }

        let newNode = new Node(val);
        newNode.next = displacedNode;
        prevNode.next = newNode;
    }

    removeAt(index){
        let prevNode = this.at(index - 1);
        let nextNode = this.at(index + 1);

        if(index === 0){
            this.head = nextNode;
            return;
        }

        if(nextNode === undefined){
            this.pop();
        }

        prevNode.next = nextNode;
    }
}