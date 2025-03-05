#include <iostream>
#include <vector>
using namespace std;

void print_vector(vector<int> &nums)
{
    for (int item : nums)
    {
        cout << item << " ";
    } cout << endl;
}

int main()
{
    vector<int> nums = {1, 2, 3, 4, 5, 6};
    print_vector(nums);

    vector<int> scores = {100, 90, 80};
    print_vector(scores);
}