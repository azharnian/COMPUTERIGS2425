#include <iostream>
using namespace std;

int a = 30;

void room1()
{
    int a = 10;
    cout << "From room1 : " << a << endl;
}

void room2(int b)
{
    int a = 20;
    cout << "From room2 : " << a << endl;
    cout << b << endl;
}

int main()
{
    int b = 100;
    room1();
    room2(b);
    cout << "From main : " << a << endl;
}