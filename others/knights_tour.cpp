#include <iostream>
#include <string>
#include <vector>
#ifdef _WIN32 
  #include <windows.h>
  #include <conio.h>
#endif
using namespace std;
void generateBoard(const int size, vector<string> &board);
void printBoard(vector<string> board);
void solveBoard(int knightXPos, int knightYPos, vector<string> board);
int calculatePossibleMoves(int nextKnightXPos, int nextKnightYPos, vector<string> board);
bool checkIfCanMove(int nextKnightXPos, int nextKnightYPos, int moveNum, vector<string> board);
void clearConsole();
char getChar();
const int knightMoves[8][2] = { { 2, 1 }, { 1, 2 }, { -1, 2 }, { -2, 1 }, { -2, -1 }, { -1, -2 }, { 1, -2 }, { 2, -1 } };
int main() {
  int size;
  int yPosition;
  vector<string> board;
  cout << "Knight's tour algorithm" << endl;
  cout << "TheFlyingKeyboard.net 2017" << endl;
  cout << "Enter size of a board" << endl;
  cin >> size;
  if (size > 4) {
    generateBoard(size, board);
    cout << "Enter Knight's X position: ";
    cin >> size;
    cout << "Enter Knight's Y position: ";
    cin >> yPosition;
    board[yPosition][size] = 1; //Smiley face
    solveBoard(size, yPosition, board);
  }
  else 
  {
    cout << "Size of board must be > 4" << endl;
    getChar();
  }
  return 0;
}
void generateBoard(const int size, vector<string> &board) {
  string stringToAdd;
  board.clear();
  for (int i = 0; i < size; i++) {
    stringToAdd += ' ';
  }
  for (int i = 0; i < size; i++) {
    board.push_back(stringToAdd);
  }
}
void printBoard(vector<string> board) {
  for (int i = 0; i < board.size(); i++) {
    cout << board[i] << endl;
  }
}
void solveBoard(int knightXPos, int knightYPos, vector<string> board) {
  vector<int> moves;
  int smallestNumber = 0;
  int smallestNumberIndex = 0;
  int xMove = 0;
  int yMove = 0;
  for (int i = 0; i < board.size() * board.size(); i++) {
    printBoard(board);
    cout << "Turn number: " << i << endl;
    cout << "Press any key to continue..." << endl;
    moves.clear();
    for (int j = 0; j < 8; j++) {
      xMove = knightXPos + knightMoves[j][1];
      yMove = knightYPos + knightMoves[j][0];
      if (checkIfCanMove(knightXPos, knightYPos, j, board)) {
        moves.push_back(calculatePossibleMoves(xMove, yMove, board));
      }
      else {
        moves.push_back(-1);
      }
    }
    smallestNumber = 8;
    smallestNumberIndex = 0;
    for (int j = 0; j < moves.size(); j++) {
      if ((moves[j] < smallestNumber) && moves[j] >= 0) {
        smallestNumber = moves[j];
        smallestNumberIndex = j;
      }  
    }
    board[knightYPos][knightXPos] = 'X';
    knightXPos += knightMoves[smallestNumberIndex][1];
    knightYPos += knightMoves[smallestNumberIndex][0];
    board[knightYPos][knightXPos] = 1;
    getChar();
    clearConsole();
  }
}
int calculatePossibleMoves(int nextKnightXPos, int nextKnightYPos, vector<string> board) {
  int moves = 0;
  for (int i = 0; i < 8; i++) {
    if (checkIfCanMove(nextKnightXPos, nextKnightYPos, i, board)) {
      moves++;
    }
  }
  
  return moves;
}
bool checkIfCanMove(int nextKnightXPos, int nextKnightYPos, int moveNum, vector<string> board) {
  int xMove = nextKnightXPos + knightMoves[moveNum][1];
  int yMove = nextKnightYPos + knightMoves[moveNum][0];
  if ((xMove >= 0 && xMove < board.size()) && (yMove >= 0 && yMove < board.size()) && board[yMove][xMove] != 'X' && board[yMove][xMove] != 1) {
    return true;
  }
  else {
    return false;
  }
}
void clearConsole() { //Clears console
#ifdef _WIN32 //Windows
  system("CLS");
#else //Others
  system("clear");
#endif
}
char getChar() { //Gets input from keyboard
  char input;
#ifdef _WIN32 //Windows
  input = _getch();
  if (input == 0 || input == 0xE0) input = _getch(); //In case of input error
#else //Others
  cin >> input;
#endif
  return input;
}
