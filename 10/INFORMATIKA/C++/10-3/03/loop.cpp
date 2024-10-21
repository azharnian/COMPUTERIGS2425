#include <iostream>
using namespace std;

int main()
{
    // while (true)
    // {
    //     cout << "Meow\n";
    // }

    // 4, 14, 24, 34, ... <100 with while loop
    int a = 4;
    while (a < 100)
    {
        cout << a << " ";
        a += 10;
    }

    cout << endl; // Enter (New Line)

    // 4, 14, 24, 34, ... <100 with for loop
    for (int i = 4; i < 100; i += 10)
    {
        cout << i << " ";
    }
}