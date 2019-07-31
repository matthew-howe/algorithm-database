#include <iostream>
using namespace std;

class Meeting
{
private:
	unsigned int startTime_;
	unsigned int endTime_;

public:
	Meeting() :
		startTime_(0),
		endTime_(0)
	{
	}
	
	Meeting(usigned int startTime, unsigned int endTime) :
		startTime_(startTime),
		endTime_(endTime)
	{
	}

	unsigned int getStartTime() const
	{
		return startTime_;
	}

	void setStartTime(unsigned int startTime)
	{
		startTime_ = startTime;
	}

	unsigned int getEndTime() const
	{
		return endTime_;
	}

	void setEndTime(unsigned int endTime)
	{
		endTime_ = endTime;
	}

	bool operator==(const Meeting& other) const
	{
		return
			startTime_ == other.startTime_
			&& endTime_ == other.endTime_;
	}
}

bool compareMeetingsByStartTime(
		const Meeting& firstMeeting,
		const Meeting& secondMeeting
		)
{
	return firstMeeting.getStartTime() < secondMeeting.getStartTime();
}

vector<Meeting> mergeRanges(const vector<Meeting>& meetings)
{
	// sort by start time
	vector<Meeting> sortedMeetings(meetings);
	sort(sortedMeetings.begin(), sortedMeetings.end(), compareMeetingsByStartTime);

	// initialize mergedMeetings with the earliest meeting
	vector<Meeting> mergedMeetings;
	mergedMeetings.push_back(sortedMeetings.front());

	for (const Meeting& currentMeeting : sortedMeetings) {
		Meeting& lastMergedMeeting = mergedMeetings.back();

		if (currentMeeting.getStartTime()
				<= lastMergedMeeting.getEndTime()) {
			// if the current meeting overlaps the last merged
			// use the later end time of the two
			lastMergedMeeting.setEndTime(max(lastMergedMeeting.getEndTime(),
						currentMeeting.getEndTime()));
		}
		else {
			// add the current meeting since it doesn't overlap
			mergedMeetings.push_back(currentMeeting);
		}	
		
	}
	return mergedMeetings;	
}

int main()
{
	cout << "Hello World" << endl;

	return 0;
}
