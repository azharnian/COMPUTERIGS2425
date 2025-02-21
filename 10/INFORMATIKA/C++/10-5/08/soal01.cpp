#include <iostream>
using namespace std;

int main()
{
    int num = 1;
    while (num <= 10)
    {
        if (num%3 == 0)
        {
            cout << num << " ";
        }
        num = num + 2;
    }
}