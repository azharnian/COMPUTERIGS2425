#include <iostream>
using namespace std;

int main()
{
    int tagihan = 98700;
    int uang_diberikan = 100000;

    if (uang_diberikan >= tagihan)
    {
        cout << "Transaksi Diproses" << endl;
    } 
    else
    {
        cout << "Transaksi Ditolak" << endl;
    }
}