#include <iostream>
#include <iomanip>
using namespace std;

double solve(int kms, double fuel)
{
    return kms/fuel;
}

int main()
{
    int kms;
    double fuel;
    cin >> kms
        >> fuel;

    cout << fixed << setprecision(3)
         << solve(kms, fuel) << " km/l" << endl;
}