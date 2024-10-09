#include <iostream>
using namespace std;

int main()
{
    int indomie_goreng = 3500;
    int nescafe_moca = 9000;
    int chupa_cup = 2500;
    int sari_roti = 6000;
    int aqua = 5000;

    int total = indomie_goreng + nescafe_moca + chupa_cup + sari_roti + aqua;
    cout << "Indomie Goreng \t" <<  indomie_goreng << endl;
    cout << "Nescafe Moca \t" << nescafe_moca << endl;
    cout << "Chupa Cup \t" << chupa_cup << endl;
    cout << "Sari Roti \t" << sari_roti << endl;
    cout << "Aqua \t\t" << aqua << endl;
    cout << "Total belanja = " << total << endl; 

    int uang_dibayarkan = 50000;
    int kembalian = uang_dibayarkan - total;

    cout << "Dibayarkan = " << uang_dibayarkan << endl;
    cout << "Kembalian = " << kembalian << endl;
}