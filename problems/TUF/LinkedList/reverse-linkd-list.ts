import {Node} from "./ListNode";


// 1->2->3->4->5->Null // Null<-1 <-2 <-3 <-4 <-5
const reverseLinkdList = (head: Node): any => {
  let current: Node | null = head;
  let prev: Node | null = null;
  while (current !== null) {
    const front: Node |  null = current.next;
    current.next = prev;
    prev = current;
    current = front;
  }
  return prev;
}



const head = new Node(10);
head.next = new Node(20)
head.next.next = new Node(30);


console.log(head);
console.log(reverseLinkdList(head))
