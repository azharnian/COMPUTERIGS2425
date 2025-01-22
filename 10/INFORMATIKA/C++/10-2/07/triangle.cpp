#include <iostream>
#include <cmath>
using namespace std;

double find_area(double base, double height);
double find_perimeter(double base, double height);

int main()
{
    cout << "AREA IS " << find_area(3, 4) << endl;
    cout << "PERIMETER IS " << find_perimeter(3, 4) << endl;
}

double find_area(double base, double height)
{
    return 0.5 * base * height;
}

double find_perimeter(double base, double height)
{
    double s = sqrt(base * base + height * height);
    return base + height + s;
}