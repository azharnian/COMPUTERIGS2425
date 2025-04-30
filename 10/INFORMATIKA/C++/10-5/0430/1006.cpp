#include <iostream>
#include <iomanip>
using namespace std;

double solution(double A, double B, double C)
{
    return (A*2 + B*3 + C*5) / 10;
}

int main()
{
    double A, B, C;
    cin >> A
        >> B
        >> C;
    
    cout << fixed << setprecision(1)
         << "MEDIA = " << solution(A, B, C) << endl;
}