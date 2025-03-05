#include <iostream>
using namespace std;

void mult_by_2(int a)
{
    a = a * 2;
}

void mult_by_3(int &b)
{
    b = b * 3;
}

int main()
{
    int a = 10, b = 20;
    mult_by_2(a);
    mult_by_3(b);
    cout << a << " " << b <<  endl;
}