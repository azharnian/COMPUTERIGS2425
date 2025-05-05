#include <iostream>
using namespace std;

int solution(int A, int B)
{
    return A + B;
}

int main()
{
    int A, B;
    cin >> A 
        >> B;

    cout << "SOMA = " << solution(A, B) << endl;
}