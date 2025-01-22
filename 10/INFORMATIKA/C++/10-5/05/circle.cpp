#include <iostream>
using namespace std;

float find_area(float PI,float r)
{
    float area = PI * r * r;
    return area;
}

double find_circumference(double PI, double r)
{
    double circumference = 2 * PI * r;
    return circumference;
}

int main()
{
    cout << "AREA 1 = " << find_area(3.14, 10) << endl;
    cout << "AREA 2 = " << find_area(3.14, 20) << endl;

    cout << "CIRCUM 1 = " << find_circumference(3.14, 10) << endl;
    cout << "CIRCUM 2 = " << find_circumference(3.14, 20) << endl;
}