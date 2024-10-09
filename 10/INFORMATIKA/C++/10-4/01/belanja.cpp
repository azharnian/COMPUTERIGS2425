#include <iostream>
using namespace std;

int main()
{
    int indomie_goreng = 3500;
    int aqua = 4000;
    int beras_5kg = 75000;

    cout << "Indomie Goreng \t" << indomie_goreng << endl;
    cout << "Aqua \t\t" << aqua << endl;
    cout << "Beras 5KG \t" << beras_5kg << endl;

    int total = indomie_goreng + aqua + beras_5kg;
    cout << "Total belanja\t" << total << endl;

    int uang_dibayarkan = 100000;
    int kembalian = uang_dibayarkan - total;
    cout << "Dibayarkan = \t" << uang_dibayarkan << endl;
    cout << "Kembalian = \t" << kembalian << endl;
}