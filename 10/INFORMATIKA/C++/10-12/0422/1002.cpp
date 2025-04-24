#include <iostream>
using namespace std;

double find_area(double R)
{
    return 3.14159 * R * R;
}

int main()
{
    double R;
    cin >> R;

    cout << find_area(R) << endl;
}