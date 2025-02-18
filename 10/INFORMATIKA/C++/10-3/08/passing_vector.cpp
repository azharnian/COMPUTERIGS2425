#include <iostream>
#include <vector>
using namespace std;

void print_vector(vector<int> &nums)
{
    for(int i = 0; i < nums.size(); i++)
    {
        cout << nums[i] << " ";
    }
    cout << endl;
}

int main()
{
    vector<int> nums;
    nums.push_back(5);
    nums.push_back(10);
    nums.push_back(15);

    print_vector(nums);
}