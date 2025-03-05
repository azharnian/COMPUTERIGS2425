#include <iostream>
#include <vector>
using namespace std;

void print_vector(vector<int> &numbers)
{
    for (int item : numbers)
    {
        cout << item << " ";
    } cout << endl;
}

int main()
{
    vector<int> numbers = {10, 20, 30, 40};

    print_vector(numbers);

    vector<int> list = {5, 10, 15, 20, 25};

    print_vector(list);
}