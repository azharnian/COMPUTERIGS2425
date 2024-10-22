#include <iostream>
using namespace std;

double find_area(double radius)
{
    return 3.14159*radius*radius;
}

double find_perimeter(double radius)
{
    return 2*3.14159*radius;
}

int main()
{
    int area_circle = find_area(100);
    cout << area_circle << endl;

    cout << find_perimeter(21) << endl;
    return 0;
}