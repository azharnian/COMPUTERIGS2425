#include <iostream>
using namespace std;

double find_area(double PI, double radius)
{
    double area = PI * radius * radius;
    return area;
}

double find_perimeter(double PI, double radius)
{
    double perimeter = 2 * PI * radius;
    return perimeter;
}

int main()
{
    double PI = 3.14159;
    cout << "AREA = " << find_area(PI, 10) << endl;
    cout << "AREA = " << find_area(PI, 20) << endl;
    cout << "AREA = " << find_area(PI, 30) << endl;

    cout << "PERIMETER = " << find_perimeter(PI, 10) << endl;
    cout << "PERIMETER = " << find_perimeter(PI, 20) << endl;
    cout << "PERIMETER = " << find_perimeter(PI, 30) << endl;
}