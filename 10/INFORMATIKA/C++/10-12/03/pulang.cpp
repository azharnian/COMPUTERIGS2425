#include <iostream>
using namespace std;

int main()
{
    int uang_saku = 30000;

    if (uang_saku >= 50000)
    {
        cout << "Naik GoCar." << endl;
    }
    else if (uang_saku >= 20000)
    {
        cout << "Naik GoRide." << endl;
    }
    else if (uang_saku >= 10000)
    {
        cout << "Bayar Bensin Teman, Nebeng." << endl;
    }
    else if (uang_saku < 10000)
    {
        cout << "Jalan Kaki.." << endl;
    }
}