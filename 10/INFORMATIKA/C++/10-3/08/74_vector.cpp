#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> list1 = {1, 1, 35, 6, 76, 4, 98};
    vector<int> list2;

    for (int item : list1)
    {
        if (item % 2 == 0)
        {
            list2.push_back(item);
        }
    }
}