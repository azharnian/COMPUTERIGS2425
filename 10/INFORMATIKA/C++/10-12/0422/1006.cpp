#include <iostream>
#include <iomanip>
using namespace std;

double find_avg(double A, double B, double C)
{
    return (A*2 + B*3 + C*5) / 10;
}

int main()
{
    double A, B, C;
    cin >> A
        >> B
        >> C;

    cout << fixed << setprecision(1)
         << "MEDIA = " << find_avg(A, B, C) << endl;
}