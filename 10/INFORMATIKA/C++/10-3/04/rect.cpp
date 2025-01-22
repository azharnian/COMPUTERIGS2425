#include <iostream>
using namespace std;

double find_area(double length, double height);

int main()
{
    cout << "AREA = " << find_area(10, 20) << endl;
    return 0;
}

double find_area(double length, double height)
{
    double area = length * height;
    return area;
}