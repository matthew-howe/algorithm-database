function mergeRanges(meetings) {
  
    // initalize an empty array to build upon
    // sort the array
    // initialize a pointer for the first start time and end time
    // iterate through the meeting times until we hit a 
    // start time that is after the intialized end time
    // add a meeting object to the return array that has a
    // start time that is the originally initialize one, and en
    // end time of the meeting before the one where our interation hit
    // a start time past our current meeting pointers

    let sortedMeetings = meetings.sort((a, b) => {
        return a.startTime - b.startTime;
    })

    
    let output = [sortedMeetings[0]];

    for (let i = 1; i < sortedMeetings.length; i++) { 

        let targetMeeting = sortedMeetings[i];
        let lastMerged = output[output.length - 1];

        if (targetMeeting.startTime > lastMerged.endTime) {
            output.push(targetMeeting);
        } else {
            lastMerged.endTime = Math.max(
                lastMerged.endTime, targetMeeting.endTime
            );
        }
    }


  return output;
}
