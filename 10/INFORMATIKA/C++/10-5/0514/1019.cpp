#include <iostream>
#include <vector>
using namespace std;

vector<int> times = {3600, 60, 1};

vector<int> solve(int seconds)
{
    vector<int> results;
    for (int t: times)
    {
        results.push_back(seconds / t);
        seconds = seconds % t;
    }
    return results;
}

int main()
{
    int seconds;
    cin >> seconds;
    vector<int> results = solve(seconds);
    cout << results[0] << ":" << results[1] << ":" << results[2] << endl;
}