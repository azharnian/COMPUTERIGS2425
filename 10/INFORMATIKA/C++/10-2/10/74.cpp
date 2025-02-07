#include <iostream>
#include <vector>
using namespace std;

vector<int> list1;
vector<int> list2;

int main()
{
    list1.push_back(1);
    list1.push_back(1);
    list1.push_back(35);
    list1.push_back(6);
    list1.push_back(76);
    list1.push_back(4);
    list1.push_back(98);

    for(int i = 0; i < list1.size(); i++)
    {
        if (list1[i] % 2 == 0)
        {
            list2.push_back(list1[i]);
        }
    }

    for(int i = 0; i < list2.size(); i++)
    {
        cout << list2[i] << " ";
    }
    cout << endl;
}