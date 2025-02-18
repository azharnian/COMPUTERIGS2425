#include <iostream>
using namespace std;

int main()
{
    int x = 6;
    int y = 12;
    int z = 24;
    if (y % x == 0)
    {
        x = y;
    }
    if (z % x == 0)
    {
        z = x;
    }
    cout << x << " " << y << " " << z << endl;
}