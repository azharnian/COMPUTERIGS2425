#include <iostream>
using namespace std;

int a = 2;

void room1()
{
    int a = 1;
    cout << a << endl;
}

void room2(int b)
{
    cout << a << endl;
    cout << b << endl;
}

int main()
{
    int b = 10;
    room1();
    room2(b);
    cout << a << endl;

}