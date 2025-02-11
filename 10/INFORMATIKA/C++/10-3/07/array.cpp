#include <iostream>
#include <array>
#include <vector>
using namespace std;

int arr[] = {1, 2, 3, 4, 5};
int len = sizeof(arr)/sizeof(int);

array<int, 5> numbers = {10, 20, 30, 40, 50};

vector<int> nums = {100, 200, 300, 400, 500, 600};

int main()
{
    cout << len << endl;
    cout << numbers.size() << endl;
    cout << nums.size() << endl;
}