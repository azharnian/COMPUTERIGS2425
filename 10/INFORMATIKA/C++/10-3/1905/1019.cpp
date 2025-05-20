#include <iostream>
using namespace std;

void solve(int seconds)
{
    int H, M;
    H = seconds / 3600;
    seconds = seconds % 3600;

    M = seconds / 60;
    seconds = seconds % 60;

    cout << H << ":" << M << ":" << seconds << endl;
}

int main()
{
    int seconds;
    cin >> seconds;
    solve(seconds);
}