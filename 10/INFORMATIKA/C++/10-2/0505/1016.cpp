#include <iostream>
using namespace std;

int solve(int kms)
{
    return kms*2;
}

int main()
{
    int kms;
    cin >> kms;
    cout << solve(kms) << " minutos" << endl;
}