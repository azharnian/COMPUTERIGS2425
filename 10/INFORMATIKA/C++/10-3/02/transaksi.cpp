#include <iostream>
using namespace std;

int main()
{
    int tagihan = 150000;
    int uang_diberikan = 10000;

    if (uang_diberikan >= tagihan)
    {
        cout << "Transaksi akan diproses.";
    } else {
        cout << "Transaksi ditolak.";
    }
}