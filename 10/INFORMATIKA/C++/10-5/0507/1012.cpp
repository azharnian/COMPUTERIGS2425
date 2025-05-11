#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

double area_triangle(double A, double C)
{
    return A * C * 0.5;
}

double area_circle(double C)
{
    return 3.14159 * pow(C, 2);
}

double area_trapezium(double A, double B, double C)
{
    return (A + B) * C * 0.5;
}

double area_square(double B)
{
    return pow(B, 2);
}

double area_rectangle(double A, double B)
{
    return A * B;
}

int main()
{
    double A, B, C;
    cin >> A >> B >> C;

    cout << fixed << setprecision(3)
         << "TRIANGULO : " << area_triangle(A, C) << endl
         << "CIRCULO : " << area_circle(C) << endl
         << "TRAPEZIUM : " << area_trapezium(A, B, C) << endl
         << "QUADRADO : " << area_square(B) << endl
         << "RECTANGULO : " << area_rectangle(A, B) << endl;
}