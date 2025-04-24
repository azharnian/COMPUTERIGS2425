#include <iostream>
using namespace std;

int find_prod(int A, int B)
{
    return A * B;
}

int main()
{
    int A, B;
    cin >> A;
    cin >> B;

    cout << "PROD = " << find_prod(A, B) << endl;
}