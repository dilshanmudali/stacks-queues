// // stacks - FILO - first in last out 
// // queue - FIFO - first in first out

// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack{
//   constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek(){
//     return this.top;
//   }
//   push(value){
//     const newNode = new Node(value)
//     if(this.length === 0){
//       this.top = newNode;
//       this.bottom = newNode;
//     }
//     else{
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length ++ 
//     return this;
//   }
//   pop(){
//     if(!this.top){
//       return null;
//     }
//     if(this.length === 0){
//       this.bottom = null;
//     }
//     else{
//       // const holdingPointer = this.top;
//       this.top = this.top.next;
//       this.length --
//       return this;
//     }
//   }
// }

// const myStack = new Stack()
// myStack.push('discord')
// myStack.push('google')
// myStack.push('facebook')
// myStack.pop()
// myStack.pop()



// class Stack{
//   constructor(){
//     this.array = [];
//   }
//   peek(){
//     return this.array[this.array.length -1];
//   }
//   push(value){
//     this.array.push(value)
//     return this
//   }
//   pop(){
// //    this.array.pop()
// //    return this
// //   }
// // }

// // const myStack = new Stack();
// //  myStack.push('discord')
// // myStack.push('google')
// // myStack.push('facebook')
// // myStack.pop()
// // // myStack.peek()


// // implement queue

// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue{
//   constructor(){
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek(){
//     return this.first;
//   }
//   enqueue(value){
//     const newNode = new Node(value);
//     if(this.length === 0){
//       this.first = newNode;
//       this.last = newNode;
//     }
//     else{
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++
//     return this;
//   }
//   dequeue(){
//    if(!this.first){
//      return null
//    }
//    if(this.length === 0){
//      this.bottom = null
//    }
//    else{
//      this.first = this.first.next;
//      this.length --
//      return this;
//    }
//   }
// }

// const myQueue = new Queue()
// myQueue.enqueue('joy');
// myQueue.enqueue('matt');
// myQueue.enqueue('bat');
// myQueue.peek()
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

