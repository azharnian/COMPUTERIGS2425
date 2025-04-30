#include <iostream>
#include <iomanip>
using namespace std;

double solution(int H, double PH)
{
    return H*PH;
}

int main()
{
    int N, H;
    double PH;

    cin >> N
        >> H
        >> PH;

    cout << "NUMBER = " << N << endl;
    cout << fixed << setprecision(2) << "SALARY = U$ " << solution(H, PH) << endl;
}