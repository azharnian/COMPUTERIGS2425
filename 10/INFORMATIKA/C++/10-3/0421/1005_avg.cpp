#include <iostream>
#include <iomanip>
using namespace std;

double find_average(double A, double B)
{
    return (A + B) / 2;
}

int main()
{
    double A, B;
    cin >> A;
    cin >> B;
    cout << fixed << setprecision(5) << "MEDIA = " << find_average(A, B) << endl;
}