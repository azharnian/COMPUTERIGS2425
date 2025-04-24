#include <iostream>
using namespace std;

int simple_sum(int A, int B)
{
    return A + B;
}

int main()
{
    int A, B;
    cin >> A;
    cin >> B;

    cout << "SOMA = " << simple_sum(A, B) << endl;
}