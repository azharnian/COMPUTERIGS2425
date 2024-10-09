#include <iostream>
using namespace std;
int main()
{
    int kembalian = 75000;

    int lembar_100 = kembalian / 100000;
    kembalian = kembalian % 100000;
    cout << "Pecahan uang 100.000 sebanyak = " << lembar_100 << " lembar" << endl;

    int lembar_50 = kembalian / 50000;
    kembalian = kembalian % 50000;
    cout << "Pecahan uang 50.000 sebanyak = " << lembar_50 << " lembar" << endl;

    int lembar_20 = kembalian / 20000;
    kembalian = kembalian % 20000;
    cout << "Pecahan uang 20.000 sebanyak = " << lembar_20 << " lembar" << endl;


    // cout << "10 : 3 hasilnya = " << 10 / 3 << endl;
    // cout << "10 : 3 hasilnya = " << 10.0 / 3.0 << endl;
    // cout << "10 : 3 sisanya  = " << 10 % 3 << endl;

    //     3___ (HASIL BAGI)
    // 3 / 10
    //      9
    //     __-
    //      1  (SISA BAGI)
}