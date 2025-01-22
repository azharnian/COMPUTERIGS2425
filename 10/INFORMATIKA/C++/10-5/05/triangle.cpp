#include <iostream>
#include <cmath>
using namespace std;

float luas_segitiga(float alas,float tinggi)
{
    float luas = alas * tinggi / 2;
    return luas;
}

float keliling_segitiga(float alas, float tinggi)
{
    float miring = sqrt(alas * alas + tinggi * tinggi);
    float keliling = alas + tinggi + miring;
    return keliling;
}

int main()
{
    cout << "LUAS 1 = " << luas_segitiga(3, 4) << endl;
    cout << "LUAS 2 = " << luas_segitiga(5, 12) << endl;

    cout << "KELILING 1 = " << keliling_segitiga(3, 4) << endl;
    cout << "KELILING 2 = " << keliling_segitiga(5, 12) << endl;
}