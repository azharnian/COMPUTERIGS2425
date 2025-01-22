#include <iostream>
#include <cmath>
using namespace std;

double luas_segitiga(double alas, double tinggi)
{
    double luas = 0.5 * alas * tinggi;
    return luas;
}

double keliling_segitiga(double alas, double tinggi)
{
    double miring = sqrt(alas * alas + tinggi * tinggi);
    double kll = miring + alas + tinggi;
    return kll;
}

int main()
{
    cout << "LUAS 1 = " << luas_segitiga(3, 4) << endl;
    cout << "LUAS 2 = " << luas_segitiga(5, 12) << endl;

    cout << "KLL 1 = " << keliling_segitiga(3, 4) << endl;
    cout << "KLL 2 = " << keliling_segitiga(5, 12) <<  endl;
}