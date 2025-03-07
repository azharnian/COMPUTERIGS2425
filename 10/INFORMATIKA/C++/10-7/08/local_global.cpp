#include <iostream>
using namespace std;

int a = 10;

void room1(int c)
{
    cout << a << endl;
    cout << c << endl;
}

void room2()
{
    int a = 50;
    int b = 60;
    cout << a << endl;
    cout << b << endl;
}

int main()
{
    int c = 100;
    room1(c);
    room2();
}