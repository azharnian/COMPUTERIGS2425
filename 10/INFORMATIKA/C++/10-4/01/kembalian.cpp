#include <iostream>
using namespace std;

//    2___ (HASIL BAGI)
// 7/ 19
//    14
//    ___-
//     5 (SISA BAGI)

int main()
{
    // cout << "19 : 7 HASILNYA = " << 19 / 7 << endl;
    // cout << "19 : 7 SISANYA  = " << 19 % 7 << endl;
    // a += 5 -> a = a + 5

    int kembalian = 185000;
    int lembar_100 = kembalian / 100000;
    kembalian %= 100000;
    cout << "Pecahan Uang Rp100.000 sebanyak : " << lembar_100 << " lembar" << endl;

    int lembar_50 = kembalian / 50000;
    kembalian %= 50000;
    cout << "Pecahan Uang Rp50.000 sebanyak : " << lembar_50 << " lembar" << endl;

}