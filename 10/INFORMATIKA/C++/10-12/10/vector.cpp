#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> nums = {10, 20, 30};

    for (int item : nums)
    {
        cout << item << " ";
    }
}