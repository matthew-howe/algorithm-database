#include <iostream>
#include <fstream>
#include <string>
using namespace std;

// Part 1
// int main(){
//   fstream newfile;
//   newfile.open("day1in.txt",ios::in); // open a file
//   if (newfile.is_open()){
//     cout << "newfile is open" << "\n";
//     string a;
//     int inc = 0;
//     int last;
//     while(getline(newfile, a)){
//       cout << a << "\n";
//       if (last == NULL) last = stoi(a);
//       else {
//         int cur = stoi(a);
//         if (cur > last) inc++;
//         last = cur;
//       }
//     }
//     newfile.close();
//     cout << "The total Increases is: " << inc << endl;
//   } else {
//     cout << "newfile not open" << "\n";
//   }
// }


// Part 2
int main(){
  fstream newfile;
  newfile.open("day1in.txt",ios::in);
  if (newfile.is_open()){
    string a;
    int inc = 0;
    int curSum = 0;
    int lastSum = 0;
    int last;
    int lastlast;
    int lastlastlast;
    while(getline(newfile, a)){
      int cur = stoi(a);
      if (lastlastlast == NULL) lastlastlast = cur;
      else if (lastlast == NULL) lastlast = cur;
      else if (last == NULL) {
        curSum = cur + lastlast + lastlastlast;
        last = cur;
      } else {
        lastSum = last + lastlast + lastlastlast;
        curSum = cur + last + lastlast;
        if (curSum > lastSum) inc++;
        lastlastlast = lastlast;
        lastlast = last;
        last = cur;
      }
    }
    newfile.close();
    cout << "The total Increases is: " << inc << endl;
  }
}


        // lastSum = curSum;
        // curSum -= lastlastlast;
        // curSum += cur;
        // if (curSum > lastSum) inc++;
        // lastlastlast = lastlast;
        // lastlast = last;
        // last = cur;