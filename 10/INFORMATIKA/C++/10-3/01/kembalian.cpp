#include <iostream>
using namespace std;

int main()
{
    int kembalian = 179000;

    int lembar_100 = kembalian / 100000;
    cout << "Pecahan Uang 100rb = " << lembar_100 << " lembar" << endl;
    kembalian %= 100000;

    int lembar_50 = kembalian / 50000;
    cout << "Pecahan Uang 50rb = " << lembar_50 << " lembar" << endl;
    kembalian %= 50000;


    


    // cout << "10 : 3 dalam C++ = " << 10 / 3 << endl;
    // cout << "11 : 4 dalam C++ = " << 11 / 4 << endl;

    // cout << "10 : 3 sisanya = " << 10 % 3 << endl;
    // cout << "11 : 4 sisanya = " << 11 % 4 << endl;

    //     2_____ (hasil)
    // 4 / 11
    //     8
    //     ___-
    //     3 (sisa)
}