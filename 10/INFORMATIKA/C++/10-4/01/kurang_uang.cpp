#include <iostream>
using namespace std;

int main()
{
    int tagihan = 200000;

    int uang_dibayarkan = 150000;

    if (uang_dibayarkan >= tagihan)
    {
        cout << "Transaksi diproses" << endl;
    } else {
        cout << "Uangnya Kurang, Tambah lagi!" << endl;
    }

}