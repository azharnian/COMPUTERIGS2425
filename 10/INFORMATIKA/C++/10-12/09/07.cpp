#include <iostream>
using namespace std;

int main()
{
    int a;
    cin >> a;
    int b;
    cin >> b;

    if (a % 3 == 0 && b % 3 == 0)
    {
        cout << "TRUE" << endl;
    } else {
        cout << "FALSE" << endl;
    }
}