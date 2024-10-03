#include <iostream>
using namespace std;

int main()
{
    long long kembalian = 77000;

    int uang100 = kembalian / 100000;
    kembalian = kembalian % 100000;

    int uang50 = kembalian / 50000;
    kembalian = kembalian % 50000;

    cout << uang100 << " lembar Rp100.000\n";
    cout << uang50 << " lembar Rp50.000\n";
    
}