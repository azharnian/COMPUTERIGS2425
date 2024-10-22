#include <iostream>
using namespace std;

int main()
{
    // 4, 14, 24, 34, (<100) 
    // While Loop
    int a = 4;
    while (a < 100)
    {
        cout << a << " ";
        a = a + 10;
    }
    cout << endl;
    // For Loop
    for (int a=4; a < 100; a += 10)
    {
        cout << a << " ";
    }
}