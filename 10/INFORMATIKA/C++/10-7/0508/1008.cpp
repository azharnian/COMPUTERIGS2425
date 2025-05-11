#include <iostream>
#include <iomanip>
using namespace std;

double solve(int WH, double SH)
{
    return WH * SH;
}

int main()
{
    int NE, WH;
    double SH;
    cin >> NE
        >> WH
        >> SH;

    cout << "NUMBER = " << NE << endl;
    cout << fixed << setprecision(2)
         << "SALARY = U$ " << solve(WH, SH) << endl;
}