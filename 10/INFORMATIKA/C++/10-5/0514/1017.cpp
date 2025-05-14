#include <iostream>
#include <iomanip>
using namespace std;

double solve(int H, int V)
{
    return 1.0 * H * V / 12;
}

int main()
{
    int H, V;
    cin >> H
        >> V;

    cout << fixed << setprecision(3)
         << solve(H, V) << endl;
}