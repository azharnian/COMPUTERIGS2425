#include <iostream>
using namespace std;

int solve(int KMS)
{
    return KMS * 2;
}

int main()
{
    int KMS;
    cin >> KMS;
    cout << solve(KMS) << " minutos" << endl;
}