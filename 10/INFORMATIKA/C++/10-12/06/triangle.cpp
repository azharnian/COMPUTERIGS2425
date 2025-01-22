#include <iostream>
#include <cmath>
using namespace std;

double find_area(double base, double height)
{
    double area = base * height / 2;
    return area;
}

double find_perimeter(double base, double height)
{
    double s = sqrt(base * base + height * height);
    double perimeter = base + height + s;
    return perimeter;
}

int main()
{
    cout << "PERIMETER = " << find_perimeter(3, 4) << endl;
    cout << "PERIMETER = " << find_perimeter(5, 12) << endl;

    cout << "AREA = " << find_area(3, 4) << endl;
    cout << "AREA = " << find_area(5, 12) << endl;
}