#include <iostream>
#include <string>

int main() {
    int tanggal = 15;
    int tahun = 2023;

    // jangan lupa bahwa string perlu diapit dengan kutip dua
    std::string bulan = "Februari"; 

    // cetak kata sandi
    std::cout << tahun + 10 << "-" << bulan << "-" << tanggal +7 << endl;
}