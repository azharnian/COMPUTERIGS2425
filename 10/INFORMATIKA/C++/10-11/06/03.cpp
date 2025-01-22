#include <iostream>
using namespace std;

int mystery(int num);

int main()
{
    cout << mystery(3) << endl;
}

int mystery(int num)
{
    while(num >= 2)
    {
        num = num - 1;
    }
    return num;
}