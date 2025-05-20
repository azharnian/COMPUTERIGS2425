#include <iostream>
using namespace std;

int solve(int distance)
{
    return distance * 2;
}

int main()
{
    int distance;
    cin >> distance;
    cout << solve(distance) << " minutos" << endl;
}