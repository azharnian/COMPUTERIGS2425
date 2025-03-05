#include <iostream>
using namespace std;

void mult_by_2(int a)
{
    a = 2 * a;
}

void mult_by_3(int &b)
{
    b = 3 * b;
}

int main()
{
    int a = 10;
    int b = 20;
    mult_by_2(a);
    mult_by_3(b);
    cout << a << " " << b << endl;
}