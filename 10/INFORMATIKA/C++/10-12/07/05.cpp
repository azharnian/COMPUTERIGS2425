#include <iostream>
using namespace std;

int mystery(int a, int b);

int main()
{
    cout << mystery(2, 4) << endl;
}

int mystery(int a, int b)
{
    a = a + b;
    int c = a + 3;
    return c;
}