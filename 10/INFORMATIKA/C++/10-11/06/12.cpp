#include <iostream>
using namespace std;

int mystery(int a, int b);

int main()
{
    cout << mystery(5, 2) << endl;
}

int mystery(int a, int b)
{
    return a % b;
}