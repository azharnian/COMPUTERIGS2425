#include <iostream>
using namespace std;
int main()
{
    int aqua = 3500;
    int sosis = 13000;
    int chiki = 7000;
    int beras = 75000;
    int galon = 30000;
    int elpiji = 150000;

    int total = aqua + sosis + chiki + beras + galon + elpiji;

    cout << "Aqua " << aqua << endl;

    cout << "Total : " << total << endl;

    int uang_dibayarkan = 300000;
    int kembalian = uang_dibayarkan - total;
    cout << "Tunai : " << uang_dibayarkan << endl;
    cout << "Kembalian : " << kembalian << endl;
}