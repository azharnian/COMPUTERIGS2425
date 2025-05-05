#include <iostream>
#include <iomanip>
using namespace std;

double solve(int KMS, double L)
{
    return KMS/L;
}

int main()
{
    int KMS;
    double L;
    cin >> KMS
        >> L;
    
    cout << fixed << setprecision(3)
         << solve(KMS, L) << " km/l" << endl;
}