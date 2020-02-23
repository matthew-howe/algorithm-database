const a = [
  [0, 1],
  [3, 5],
  [4, 8],
  [10, 12],
  [9, 10]
];
// -> [[0, 1], [3, 8], [9, 12]]

const fn = nums => {
  const sortedNums = nums.sort((a, b) => a[0] - b[0]);

  const mergedMeetings = [];
  let meetingToMerge = sortedNums[0];

  for (let i = 1; i < nums.length; i++) {
    let currentMeeting = sortedNums[i];

    if (currentMeeting[0] <= meetingToMerge[1]) {
      meetingToMerge[1] = Math.max(meetingToMerge[1], currentMeeting[1]);
    } else {
      mergedMeetings.push(meetingToMerge);
      meetingToMerge = currentMeeting;
    }
  }

  mergedMeetings.push(meetingToMerge);
  return mergedMeetings;
};

console.log(fn(a));
