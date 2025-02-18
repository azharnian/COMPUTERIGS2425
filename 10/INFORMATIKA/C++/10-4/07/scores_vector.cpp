#include <iostream>
#include <vector>
using namespace std;

int main()
{
    // vector<int> scores = {100, 90, 80};
    vector<int> scores;
    scores.push_back(100);
    scores.push_back(90);
    scores.push_back(80);

    for (int i = 0; i < scores.size(); i++)
    {
        cout << scores[i] << endl;
    }
}