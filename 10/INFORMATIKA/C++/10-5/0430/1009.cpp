#include <iostream>
#include <iomanip>
using namespace std;

double solution(double FS, double PS)
{
    return FS + 0.15*PS;
}

int main()
{
    string NM;
    double FS, PS;
    cin >> NM
        >> FS
        >> PS;
    
    cout << fixed << setprecision(2)
         << "TOTAL = R$ " << solution(FS, PS) << endl;
}