#include <iostream>
using namespace std;
int main()
{
    int uang_saku = 30000;
    if (uang_saku >= 50000)
    {
        cout << "Pesan Gocar!" << endl;
    }
    else if (uang_saku >= 20000)
    {
        cout << "Pesan Goride!" << endl;
    }
    else if (uang_saku >= 10000)
    {
        cout << "Nebeng Teman, Isi bensin." << endl;
    }
    else if (uang_saku < 10000)
    {
        cout << "Jalan kaki.." << endl;
    }

}