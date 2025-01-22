#include <iostream>
using namespace std;

float luas_lingkaran(float PI,float radius)
{
    float luas = PI * radius * radius;
    return luas;
}

float keliling_lingkaran(float PI, float radius)
{
    float kll = 2 * PI * radius;
    return kll;
}

int main()
{
    cout << "LUAS LINGKARAN = " << luas_lingkaran(3.14, 10) << endl;
    cout << "LUAS LINGKARAN 2 = " << luas_lingkaran(3.14, 20) << endl;
    cout << "KLL LINGKARAN = " << keliling_lingkaran(3.14, 10) << endl;
    cout << "KLL LINGKARAN 2 = " << keliling_lingkaran(3.14, 20) << endl;
}