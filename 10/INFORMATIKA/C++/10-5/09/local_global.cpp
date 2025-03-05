#include <iostream>
using namespace std;

int a = 10;

void room2()
{
    cout << a << endl;
}

void room1(int b)
{
    int a = 5;
    cout << a <<  endl;
    cout << b << endl;
}

int main()
{
    int b = 25;
    room1(b);
    room2();

}