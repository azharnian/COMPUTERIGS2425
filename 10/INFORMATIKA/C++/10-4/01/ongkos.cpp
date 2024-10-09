#include <iostream>
using namespace std;

int main()
{
    int ongkos_pulang = 35000;

    // if (ongkos_pulang >= 50000){
    //     cout << "Naik Gocar" << endl;
    // }

    // if (ongkos_pulang >= 20000){
    //     cout << "Naik Goride" << endl;
    // }

    // if (ongkos_pulang >= 10000){
    //     cout << "Isi bensin motor teman" << endl;
    // }

    // if (ongkos_pulang < 10000) {
    //     cout << "Jalan kaki" << endl;
    // }

    if (ongkos_pulang >= 50000){
        cout << "Naik Gocar" << endl;
    }

    else if (ongkos_pulang >= 20000){
        cout << "Naik Goride" << endl;
    }

    else if (ongkos_pulang >= 10000){
        cout << "Isi bensin motor teman" << endl;
    }

    else if (ongkos_pulang < 10000) {
        cout << "Jalan kaki" << endl;
    }
}