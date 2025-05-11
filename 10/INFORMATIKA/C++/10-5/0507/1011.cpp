#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

double solve(double R)
{
    return (4/3.0) * 3.14159 * pow(R, 3);
}

int main()
{
    double R;
    cin >> R;
    cout << fixed << setprecision(3) 
         << "VOLUME = " << solve(R) << endl;
}