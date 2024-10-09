#include <iostream>
using namespace std;
int main()
{   
    int tagihan = 87000;
    int uang_dibayarkan = 50000;  

    if (uang_dibayarkan >= tagihan)
    {
        cout << "Transaksi Diproses!" << endl;
    } else 
    {
        cout << "Transaksi Ditolak, Uang yang dibayarkan tidak cukup" << endl;
    }
}