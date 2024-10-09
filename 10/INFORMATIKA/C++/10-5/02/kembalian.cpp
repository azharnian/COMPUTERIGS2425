#include <iostream>
using namespace std;
int main()
{
    // cout << "10 : 3 HASILNYA = " << 10 / 3 << endl;
    // cout << "10 : 3 SISANYA  = " << 10 % 3 << endl;
    // cout << "10 : 3 HASILNYA = " << 10.0 / 3.0 << endl;

    int kembalian = 60500;

    int lembar_50 = kembalian / 50000;
    cout << "Uang Rp50.000 sebanyak "<< lembar_50 << " lembar" << endl;
    kembalian = kembalian % 50000;

    int lembar_20 = kembalian / 20000;
    cout << "Uang Rp20.000 sebanyak " << lembar_20 << " lembar" << endl;
    kembalian = kembalian % 20000;

}
    //    3_____ (HASILNYA)
    // 3/ 10
    //     9
    // ______-
    //     1 (SISANYA)