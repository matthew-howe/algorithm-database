function ListNode(val) {
 this.val = val;
 this.next = null;
}
class MinHeap{
 constructor(comparator){
   this.comparator = comparator
   this.nodes = []
 }
 size(){
   return this.nodes.length
 }
 peek(){
   if (this.nodes.length > 0){
     return this.nodes[0]
   }
   else {
     return null
   }
 }
 pop(){
   if (this.nodes.length === 0){
     return null
   }
   if (this.nodes.length === 1){
     return this.nodes.pop()
   }
   if (this.nodes.length > 1){
     const removed = this.nodes[0]
     this.nodes[0] = this.nodes.pop()
     let newParentIndex = 1
     while (newParentIndex * 2 - 1 < this.nodes.length){
       const leftChildIndex = newParentIndex * 2
       let lesserChildIndex = leftChildIndex
       const leftChild = this.nodes[leftChildIndex - 1]
       if (leftChildIndex < this.nodes.length){
         // there exists a second child
         const rightChildIndex = leftChildIndex + 1
         const rightChild = this.nodes[rightChildIndex - 1]
         if (this.comparator(leftChild, rightChild) >= 0){
           lesserChildIndex = rightChildIndex
         }
       }
       const lesserChild = this.nodes[lesserChildIndex - 1]
       const newParent = this.nodes[newParentIndex - 1]
       if (this.comparator(lesserChild, newParent) < 0){
         const tmp = newParent
         this.nodes[newParentIndex - 1] = lesserChild
         this.nodes[lesserChildIndex - 1] = tmp
         newParentIndex = lesserChildIndex
       }
       else {
         break
       }
     }
     return removed
   }
 }
 insert(value){
   this.nodes.push(value)
   if (this.nodes.length > 1){
     // logically, indices for nodes in a heap begin at 1
     // 1 is subtracted from index when using nodes array
     let targetIndex = Math.floor(this.nodes.length / 2)
     let newChildIndex = this.nodes.length
     while (targetIndex > 0){
       const parent = this.nodes[targetIndex - 1]
       const child = this.nodes[newChildIndex - 1]
       if (this.comparator(child, parent) < 0){
           const tmp = parent
           this.nodes[targetIndex - 1] = child
           this.nodes[newChildIndex - 1] = tmp
         }
         else {
           break // terminate loop if no swap occurs
         }
       newChildIndex = targetIndex
       targetIndex = Math.floor(targetIndex / 2)
     }
   }
 }
}
/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
var mergeKLists = function(lists) {
   const listNodeComparator = function(a, b){
     return a.val - b.val
   }
   const heap = new MinHeap(listNodeComparator)
   for (let head of lists){
     let cursor = head
     while (cursor !== null){
       heap.insert(cursor)
       cursor = cursor.next
     }
   }
   if (heap.size() > 0){
     const head = heap.pop()
     let cursor = head
     while (heap.size() > 0){
       cursor.next = heap.pop()
       cursor = cursor.next
     }
     cursor.next = null
     return head
   }
   else {
     return null
   }
};
