#include <iostream>
#include <vector>
using namespace std;

vector<int> scores = {100, 90, 80};

int main()
{
    for (int item : scores)
    {
        cout << item << " ";
    }
    cout << endl;
}