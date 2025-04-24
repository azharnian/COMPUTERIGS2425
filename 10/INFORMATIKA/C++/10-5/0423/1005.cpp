#include <iostream>
#include <iomanip>
using namespace std;

double find_avg(double A, double B)
{
    return (A*3.5 + B*7.5)/11;
}

int main()
{
    double A, B;
    cin >> A;
    cin >> B;

    cout << fixed << setprecision(5) << find_avg(A, B) << endl;
}