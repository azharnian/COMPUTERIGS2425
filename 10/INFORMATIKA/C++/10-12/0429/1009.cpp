#include <iostream>
#include <iomanip>
using namespace std;

double solution(double FS, double PS)
{
    return FS + 0.15*PS;
}

int main()
{
    string N;
    double FS, PS;
    cin >> N
        >> FS
        >> PS;
    
    cout << fixed << setprecision(2)
         << "TOTAL = R$ " << solution(FS, PS) << endl;
}