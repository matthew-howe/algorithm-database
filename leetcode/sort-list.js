var sortList = function(head) {
  for (let i = 1; i < head.length; i++) {
    let cur = head[i];
    let k = i;
    for (let j = i - 1; j >= 0; j--) {
      let ptr = head[j];
      if (cur < ptr) {
        let temp = ptr;
        head[j] = cur;
        head[k] = ptr;
      }
      k--;
    }
  }
  return head;
};

console.log(sortList([4,2,1,3]));
