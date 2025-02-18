#include <iostream>
#include <vector>
using namespace std;

int mystery(vector<int> &list)
{
    int sum = 0;
    for (int i = 0; i < list.size(); i++)
    {
        sum = sum + list[i];
    }
    return sum / list.size();
}

int main()
{
    // vector<int> list = {11, 35, 6, 0};
    vector<int> list;
    list.push_back(11);
    list.push_back(35);
    list.push_back(6);
    list.push_back(0);

    cout << mystery(list) << endl;
}