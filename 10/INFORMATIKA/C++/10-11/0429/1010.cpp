#include <iostream>
#include <iomanip>
using namespace std;

double solution(int NP1, double PP1, int NP2, double PP2)
{
    return NP1*PP1 + NP2*PP2;
}

int main()
{
    int CP1, CP2, NP1, NP2;
    double PP1, PP2;

    cin >> CP1 >> NP1 >> PP1
        >> CP2 >> NP2 >> PP2;

    cout << fixed << setprecision(2)
         << "VALOR A PAGAR : R$ " << solution(NP1, PP1, NP2, PP2) << endl;
}