#include <iostream>
using namespace std;

int main()
{
    int tagihan = 250000;
    int uang_dibayar = 200000;

    if (uang_dibayar >= tagihan)
    {
        cout << "Transaksi diterima." << endl;
    } else {
        cout << "Transaksi ditolak." << endl;
    }
}