#include <iostream>
using namespace std;

int find_sum(int A, int B)
{
    return A + B;
}

int main()
{
    int A, B;
    cin >> A;
    cin >> B;

    cout << "SOMA = " << find_sum(A, B) << endl;
}