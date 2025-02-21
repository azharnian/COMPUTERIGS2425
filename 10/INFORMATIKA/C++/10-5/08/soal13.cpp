#include <iostream>
using namespace std;

int main()
{
    int a = 4, b = 5, temp;
    cout << "original\n";
    cout << a << " " << b << endl;

    temp = a;
    a = b;
    b = temp;

    cout << "swap\n";
    cout << a << " " << b << endl;
}