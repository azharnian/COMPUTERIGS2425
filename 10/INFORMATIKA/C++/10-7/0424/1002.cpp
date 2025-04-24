#include <iostream>
#include <iomanip>
using namespace std;

double find_area(double R)
{
    return 3.14159 * R * R;
}

int main()
{
    double R;
    cin >> R;

    cout << fixed << setprecision(4) << "A=" << find_area(R) << endl;
}