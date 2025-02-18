#include <iostream>
using namespace std;

int a = 100;

void room1(int b)
{
    int a = 10;
    cout << a << endl;
    cout << b << endl;
}

void room2()
{
    int a = 20;
    cout << a << endl;
}

void room3()
{
    cout << a << endl;
}

int main()
{
    int b = 200;
    room1(b);
    room2();
    room3();
}