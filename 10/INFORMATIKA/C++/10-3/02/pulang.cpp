#include <iostream>
using namespace std;

int main()
{
    int sisa_uang = 35000;

    if (sisa_uang >= 50000){
        cout << "Naik Gocar." << endl;
    }
    else if (sisa_uang >= 20000){
        cout << "Naik Goride" << endl;
    }
    else if (sisa_uang >= 10000){
        cout << "Nebeng temen, bayar bensin." << endl;
    }
    else if (sisa_uang < 10000){
        cout << "Jalan kaki." << endl;
    }
}