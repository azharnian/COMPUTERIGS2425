#include <iostream>
#include <iomanip>
using namespace std;

double solution(double R)
{
    return (4/3.0) * 3.14159 * R * R * R;
}

int main()
{
    double R;
    cin >> R;

    cout << fixed << setprecision(3) << "VOLUME = " << solution(R) << endl;
}