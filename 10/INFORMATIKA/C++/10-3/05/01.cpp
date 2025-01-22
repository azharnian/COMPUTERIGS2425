#include <iostream>
using namespace std;

string mystery(int num)
{
    if (num % 2 == 0)
    {
        return "Even";
    } else 
    {
        return "Odd";
    }
}

int main()
{
    cout << mystery(4) << endl;
}