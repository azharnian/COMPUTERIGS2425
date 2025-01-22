#include <iostream>
using namespace std;

int mystery(int a, int b)
{
    return a % b;
}

int main()
{
    cout << mystery(5, 2) << endl;
}