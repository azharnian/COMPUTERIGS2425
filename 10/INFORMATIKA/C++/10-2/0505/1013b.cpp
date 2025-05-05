#include <iostream>
using namespace std;

int solve(int A, int B, int C)
{
    if (A > B && A > C)
        return A;
    else if (B > A && B > C)
        return B;
    return C;
}

int main()
{
    int A, B, C;
    cin >> A >> B >> C;
    cout << solve(A, B, C) << " eh o maior" << endl;
}