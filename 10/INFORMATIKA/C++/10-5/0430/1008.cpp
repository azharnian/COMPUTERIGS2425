#include <iostream>
#include <iomanip>
using namespace std;

double solution(int WH, double SH)
{
    return WH*SH;
}

int main()
{
    int NM, WH;
    double SH;

    cin >> NM
        >> WH
        >> SH;

    cout << "NUMBER = " << NM << endl;
    cout << fixed << setprecision(2)
         << "SALARY = U$ " << solution(WH, SH) << endl;
}