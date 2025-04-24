#include <iostream>
#include <iomanip>
using namespace std;

double find_area_of_circle(double R)
{
    double area = 3.14159 * R * R;
    return area;
}

int main()
{
    double input;
    cin >> input;

    cout << fixed << setprecision(4) << "A=" << find_area_of_circle(input) << endl;
}