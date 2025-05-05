#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

double solution(double x1, double y1, double x2, double y2)
{
    // return sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) );
    return sqrt( pow((x2-x1),2) + pow((y2-y1),2) );
}

int main()
{
    double x1, y1, x2, y2;
    cin >> x1 >> y1
        >> x2 >> y2;
    cout << fixed << setprecision(4) << solution(x1, y1, x2, y2) << endl;

}