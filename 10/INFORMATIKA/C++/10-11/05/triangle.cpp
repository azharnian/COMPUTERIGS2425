#include <iostream>
#include <cmath>
using namespace std;

float find_perimeter(float base, float height)
{
    float s = sqrt(base * base + height * height);
    float perimeter = base + height + s;
    return perimeter;
}

int main()
{

}