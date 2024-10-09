#include <iostream>
using namespace std;

int main()
{
    int kembalian = 125000;

    int lembar_100 = kembalian / 100000;
    kembalian = kembalian % 100000;
    cout <<"Pecahan Uang Rp100ribu sebanyak " << lembar_100 << " lembar" << endl;

    int lembar_50 = kembalian / 50000;
    kembalian = kembalian % 50000;
    cout << "Pecahan Uang Rp50ribu sebanyak " << lembar_50 << " lembar" << endl;

    // cout << "10 : 3 HASILNYA = " << 10 / 3 << endl;
    // cout << "10 : 3 SISANYA  = " << 10 % 3 << endl;
    // cout << "10 : 3 HASILNYA = " << 10.0 / 3.0 << endl;
}