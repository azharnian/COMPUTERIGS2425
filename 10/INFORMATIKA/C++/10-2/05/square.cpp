#include <iostream>
#include <cmath>
using namespace std;

int square(int n);

void cubic(int n)
{
    cout << n*n*n << endl;
}

int main()
{
    cout << sqrt(9) << endl;
    cout << square(10) << endl;
}

int square(int n)
{
    return n*n;
}