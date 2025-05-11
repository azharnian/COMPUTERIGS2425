#include <iostream>
#include <iomanip>
using namespace std;

double solve(int H, int S)
{
    return H * S / 12.0;
}

int main()
{
    double H, S;
    cin >> H
        >> S;
    cout << fixed << setprecision(3) << solve(H, S) << endl;
}