#include <iostream>
using namespace std;

int a = 500;
int d = 90;

void room1()
{
    int a = 100;
    cout << a << endl;
    cout << d << endl;
}

void room2(int b, int c)
{
    cout << a << endl;
    cout << b << endl;
    cout << c << endl;
}

int main()
{
    int b = 25;
    int c = 75;
    room1();
    room2(b, c);
}