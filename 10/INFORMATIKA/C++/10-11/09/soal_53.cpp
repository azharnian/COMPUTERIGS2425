#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<string> snacks = {"donut", "french fries", "candy", "popcorn", "candy", "grapes", "apples", "banana"};

    int j = 0;
    while (j != 5)
    {
        snacks[j] = snacks[j + 4];
        j = j + 1;
    }

    for (string snack : snacks)
    {
        cout << snack << " ";
    }
}