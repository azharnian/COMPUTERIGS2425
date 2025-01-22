#include <iostream>
using namespace std;

string mystery(int num)
{
    if (num%2 == 0)
    {
        return "even";
    } else {
        return "odd";
    }
}

int main()
{
    cout << mystery(4) << endl;
}