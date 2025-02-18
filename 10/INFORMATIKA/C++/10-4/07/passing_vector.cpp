#include <iostream>
#include <vector>
using namespace std;

int mystery(vector<int> &list);

int main()
{
    vector<int> list;
    list.push_back(11);
    list.push_back(35);
    list.push_back(6);

    cout << mystery(list) << endl;
}

int mystery(vector<int> &list)
{
    int max = list[0];
    for (int i = 0; i < list.size(); i++)
    {
        if (list[i] > max)
        {
            max = list[i];
        }
    } 
    return max;  
}