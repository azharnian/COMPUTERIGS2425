#include <iostream>
#include <vector>
using namespace std;

vector<int> banknotes = {100, 50, 20, 10, 5, 2, 1};

vector<int> solve(int money)
{
    vector<int> results;
    for (int note : banknotes)
    {
        results.push_back(money/note);
        money = money % note;
    }
    return results;
}

int main()
{
    int money;
    cin >> money;
    vector<int> results = solve(money);

    cout << money << endl;
    for (int i = 0, len = results.size(); i < len; i++)
    {
        cout << results[i] << " nota(s) de R$ "<< banknotes[i] << ",00" << endl;
    }
}