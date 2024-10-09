#include <iostream>
using namespace std;

int main()
{
    int tagihan = 75000;
    int uang_diberikan = 50000;

    if (uang_diberikan >= tagihan)
    {
        cout << "Transaksi Diproses.." << endl;
    } else 
    {
        cout << "Transaksi Ditolak!" << endl;
    }
}