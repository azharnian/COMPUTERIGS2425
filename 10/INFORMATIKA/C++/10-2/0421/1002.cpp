#include <iostream>
#include <iomanip>
using namespace std;

double area_of_circle(double R)
{
    return 3.14159 * R * R;
}

int main()
{
     double R;
     cin >> R;
     cout << fixed << setprecision(4) << "A=" << area_of_circle(R) << endl;
}