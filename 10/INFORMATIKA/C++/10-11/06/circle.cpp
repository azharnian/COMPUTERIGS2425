#include <iostream>
using namespace std;

float find_area(float PI,float radius)
{
    return PI * radius * radius;
}

float find_perimeter(float PI, float radius){ return 2 * PI * radius;}

int main()
{
    cout << "AREA 1 : " << find_area(3.14, 10) << endl;
    cout << "AREA 2 : " << find_area(3.14, 20) << endl;
    cout << "AREA 3 : " << find_area(3.14, 30) << endl;
}