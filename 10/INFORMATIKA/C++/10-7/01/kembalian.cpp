#include <iostream>
using namespace std;

int main()
{
    int kembalian = 21500;

    int lembar_50 = kembalian / 50000;
    kembalian = kembalian % 50000;
    cout << "Pecahan Rp50.000 sebanyak " << lembar_50 << " lembar" << endl;

    int lembar_20 = kembalian / 20000;
    kembalian = kembalian % 20000;
    cout << "Pecahan Rp20.000 sebanyak " << lembar_20 << " lembar" << endl;

    // cout << "10 : 3 HASILNYA = " << 10 / 3 << endl;
    // cout << "10 : 3 SISANYA  = " << 10 % 3 << endl;
    // cout << "10 : 3 HASILNYA = " << 10.0 / 3.0 << endl;
}

    //   3___ (HASILNYA)
    // 3/ 10
    //     9
    // _____-
    //     1 (SISANYA)