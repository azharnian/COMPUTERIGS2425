#include <iostream>
#include <cmath>
using namespace std;

int solve(int A, int B, int C)
{
    int AB = (A + B + abs(A-B))/2;
    return (AB + C + abs(AB -C ))/2;
}

int main()
{
    int A, B, C;
    cin >> A >> B >> C;
    cout << solve(A, B, C) << " eh o maior" << endl;
}