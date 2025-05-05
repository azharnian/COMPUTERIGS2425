#include <iostream>
using namespace std;

int solution(int A, int B, int C)
{
    int AB;
    if (A > B)
        AB = A;
    else
        AB = B;
    
    if (AB > C)
        return AB;
    else
        return C;
}

int main()
{
    int A, B, C;
    cin >> A >> B >> C;

    cout << solution(A, B, C) << " eh o maior" << endl;
}