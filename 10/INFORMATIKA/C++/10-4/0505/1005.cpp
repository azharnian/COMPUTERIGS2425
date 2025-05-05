#include <iostream>
#include <iomanip>
using namespace std;

double solution(double A, double B)
{
    return (A*3.5 + B*7.5) / 11;
}

int main()
{
    double A, B;
    cin >> A
        >> B;

    cout << fixed << setprecision(5) 
         << "MEDIA = " << solution(A, B) << endl; 
}