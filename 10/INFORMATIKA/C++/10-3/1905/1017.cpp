#include <iostream>
#include <iomanip>
using namespace std;

double solve(int t, int s)
{
    return 1.0*t*s/12;
}

int main()
{
    int t, s;
    cin >> t
        >> s;

    cout << fixed << setprecision(3)
         << solve(t, s) << endl;
}