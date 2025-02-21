#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> nums = {1, 4, 7, 10, 13};
    int count = 2;

    for (int i = 0; i < nums.size(); i++)
    {
        cout << nums[nums.size() - count] << " ";
        count = count + 1;
    }
    cout << endl;
}