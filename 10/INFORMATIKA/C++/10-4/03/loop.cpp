#include <iostream>
using namespace std;

int main()
{
    // while (true)
    // {
    //     cout << "Meow\n";
    // }

    // 4, 14, 24, 34 (< 100) While Loop
    int a = 4;
    while (a < 100)
    {
        cout << a << " ";
        a = a + 10;
    }
    cout << endl;
    // 4, 14, 24, 34 (< 100) For loop
    for (int a = 4; a < 100; a = a + 10)
    {
        cout << a << " ";
    }
}