#include <iostream>
#include <cmath>
using namespace std;

// double find_area() // isi sendiri
// {
//     // isi sendiri
//     return
// }

double find_perimeter(double base, double height)
{
    double s = sqrt(base * base + height * height);
    double perimeter = base + height + s;
    return perimeter;
}

int main()
{
    cout << "PERIMETER 1 = " << find_perimeter(3, 4) << endl;
}