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
    cout << "AREA = " << find_area(3.14, 10) << endl;
    cout << "AREA = " << find_area(3.14, 20) << endl;

    cout << "PERIMETER = " << find_perimeter(3.14, 10) << endl;
    cout << "PERIMETER = " << find_perimeter(3.14, 20) << endl;
}