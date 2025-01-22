#include <iostream>
using namespace std;

float find_area(float PI,float radius){
    float area = PI * radius * radius;
    return area;
}

float find_perimeter(float PI, float radius){
    float perimeter = 2 * PI * radius;
    return perimeter;
}

int main()
{
    cout << "AREA 1 = " << find_area(3.14, 10) << endl;
    cout << "AREA 2 = " << find_area(3.14, 20) << endl;
    cout << "AREA 3 = " << find_area(3.14, 30) << endl;

    cout << "PERIMETER 1 = " << find_perimeter(3.14, 10) << endl;
    cout << "PERIMETER 2 = " << find_perimeter(3.14, 20) << endl;
    cout << "PERIMETER 3 = " << find_perimeter(3.14, 30) << endl;
}