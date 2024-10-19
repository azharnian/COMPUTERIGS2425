#include <iostream>
using namespace std;

int main()
{
    int isi_dompet = 35000;

    if (isi_dompet >= 50000){
        cout << "TAXI / GOCAR" << endl;
    } else if (isi_dompet >= 20000){
        cout << "GORIDE" << endl;
    } else if (isi_dompet >= 10000) {
        cout << "BECAK" << endl;
    } else {
        cout << "JALAN KAKI" << endl;
    }
}