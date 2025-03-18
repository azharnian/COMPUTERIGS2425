#include <iostream>
using namespace std;

void print_arr(int len, int *arr)
{
    for (int i = 0; i < len; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    int nums[5] = {10, 20, 30, 40, 50};
    print_arr(5, nums);
}