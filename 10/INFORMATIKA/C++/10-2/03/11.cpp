#include <iostream>
using namespace std;

int main()
{
    int x = 1;
    for (int i = 0; i < 3; i++)
    {
        x += 2;
        if (x % 2 == 0)
        {
            cout << "even\n";
        } else 
        {
            cout << "odd\n";
        }
    }
}
