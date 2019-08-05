function minNumberOfJumps(arr) {
  let jumps = 0
	if (arr.length === 1) {
		return 0
	}
  if (arr[0] >= arr.length - 1) {
    return 1
  } else if (arr[0] <= arr.length - 1) {
    let bestJumpIndex = 0
    let jumpValue = 0
    for (let i = 0; i <= arr[0]; i++) {
      if (arr[i] + i >= jumpValue) {
        jumpValue = arr[i] + i
        bestJumpIndex = i
      }
    }
    jumps ++
    return jumps + minNumberOfJumps(arr.slice(bestJump))
  }
}
// O(n^2)
