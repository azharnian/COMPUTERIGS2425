#include <iostream>
#include <iomanip>
using namespace std;

double find_average(double A, double B, double C)
{
    return (A + B + C) / (10);
}

int main()
{
    double A, B, C;
    cin >> A;
    cin >> B;
    cin >> C;
    
    cout << fixed << setprecision(1) << "MEDIA = " << find_average(A, B, C) << endl;
}