#include <iostream>
#include <iomanip>
using namespace std;

int main()
{  
    int X;
    cin >> X;
    double Y;
    cin >> Y;
    cout << fixed << setprecision(3) << X/Y << " km/l" << endl;
}