#include <iostream>
using namespace std;

int find_diff(int A,int B,int C,int D)
{
    return (A*B - C*D);
}

int main()
{
    int A, B, C, D;
    cin >> A
        >> B
        >> C
        >> D;

    cout << "DIFERENCA = " << find_diff(A, B, C, D) << endl;
}