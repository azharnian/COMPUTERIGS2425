#include <iostream>
using namespace std;

double find_area(double length, double width);

int main()
{
    cout << "AREA = " << find_area(10, 20) << endl;
}

double find_area(double length, double width)
{
    double area = length * width;
    return area
}