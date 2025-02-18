#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> scores;
    scores.push_back(100);
    scores.push_back(90);
    scores.push_back(80);

    for (int i = 0; i < scores.size(); i++)
    {
        cout << scores[i] << " ";
    }
    cout << endl;

    scores.pop_back();
    scores.pop_back();
    for (int i = 0; i < scores.size(); i++)
    {
        cout << scores[i] << " ";
    }
    cout << endl;

    scores.push_back(70);
    scores.push_back(60);
    for (int i = 0; i < scores.size(); i++)
    {
        cout << scores[i] << " ";
    }
    cout << endl;


    scores.insert(scores.begin() + 1, 55);
    for (int i = 0; i < scores.size(); i++)
    {
        cout << scores[i] << " ";
    }
    cout << endl;
}