#include <iostream>
using namespace std;

void mult_by_2(int a) // by value
{
    a = a * 2;
}

void mult_by_3(int &b) // by reference
{
    b = b * 3;
}

int main()
{
    int a = 10, b = 20;
    mult_by_2(a); // by value
    mult_by_3(b); // by reference
    cout << a << " " << b << endl;
}