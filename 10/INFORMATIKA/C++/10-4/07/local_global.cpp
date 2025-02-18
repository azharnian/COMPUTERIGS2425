#include<iostream>
using namespace std;

int a = 100;

void room1()
{
    int a = 20;
    cout << a << endl;
}

void room2(int b)
{
    cout << a << endl;
    cout << b << endl;
}

int main()
{
    int b = 25;
    room1();
    room2(b);
}