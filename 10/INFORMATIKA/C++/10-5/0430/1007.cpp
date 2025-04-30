#include <iostream>
using namespace std;

int solution(int A, int B, int C, int D)
{
    return A*B - C*D;
}

int main()
{
    int A, B, C, D;
    cin >> A
        >> B
        >> C
        >> D;
    
    cout << "DIFERENCA = " << solution(A, B, C, D) << endl;
}