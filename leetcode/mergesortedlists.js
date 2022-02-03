var mergeTwoLists = function(list1, list2) {
  let output = []
  let totaliters = list1.length + list2.length;
  let l1p = 0;
  let l2p = 0;
  for ( let i = 0; i < totaliters; i++) {
    if (list1[l1p] === undefined) {
      output.push(list2[l2p])
      l2p++
    }
    else if (list2[l2p] === undefined) {
      output.push(list1[l1p])
      l1p++
    }
    else if (list2[l2p] < list1[l1p]) {
      output.push(list2[l2p])
      l2p++
    } else {
      output.push(list1[l1p])
      l1p++
    }
  }
  return output;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))
console.log('should be [1,1,2,3,4,4]')
