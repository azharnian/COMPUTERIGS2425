#include <iostream>
using namespace std;

string mystery(int num);

int main()
{
    cout << mystery(4) << endl;
}

string mystery(int num)
{
    if (num % 2 == 0)
    {
        return "even";
    } else {
        return "odd";
    }
}